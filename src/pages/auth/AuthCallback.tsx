import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export function AuthCallback() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Confirming your email...");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function handleCallback() {
      try {
        if (!supabase) {
          setStatus("error");
          setMessage("Authentication service is unavailable.");
          return;
        }

        // Get the token_hash and type from URL parameters
        const token_hash = searchParams.get('token_hash');
        const type = searchParams.get('type');

        console.log("Callback params:", { token_hash, type });

        if (!token_hash || !type) {
          setStatus("error");
          setMessage("Invalid confirmation link. Missing required parameters.");
          return;
        }

        // Verify the email confirmation token
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash,
          type: type as 'email'
        });

        if (error) {
          console.error("Email confirmation error:", error.message);
          setStatus("error");
          
          // Handle specific error cases
          if (error.message.includes('expired')) {
            setMessage("Confirmation link has expired. Please request a new one.");
          } else if (error.message.includes('invalid')) {
            setMessage("Invalid confirmation link. Please check your email for the correct link.");
          } else {
            setMessage(`Confirmation failed: ${error.message}`);
          }
        } else {
          console.log("Email confirmed successfully:", data);
          setStatus("success");
          setMessage("Your email has been confirmed successfully! Redirecting...");
          
          // Wait a moment then redirect to dashboard
          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 2000);
        }
      } catch (err) {
        console.error("Callback error:", err);
        setStatus("error");
        setMessage("An unexpected error occurred. Please try again.");
      }
    }

    handleCallback();
  }, [navigate, searchParams]);

  const handleResendConfirmation = async () => {
    // You might want to implement this to resend confirmation email
    setMessage("Please check your email for a new confirmation link.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Email Confirmation</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            {status === "loading" && (
              <div className="flex flex-col items-center space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <p className="text-gray-600">{message}</p>
              </div>
            )}
            
            {status === "success" && (
              <div className="flex flex-col items-center space-y-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <p className="text-green-600 font-medium">{message}</p>
                <p className="text-sm text-gray-500">
                  You can now access all features of your account.
                </p>
              </div>
            )}
            
            {status === "error" && (
              <div className="flex flex-col items-center space-y-4">
                <XCircle className="h-8 w-8 text-red-600" />
                <p className="text-red-600 font-medium">{message}</p>
                <div className="space-y-2 w-full">
                  <Button 
                    onClick={() => navigate("/login")} 
                    className="w-full"
                  >
                    Back to Login
                  </Button>
                  <Button 
                    onClick={() => navigate("/register")} 
                    variant="outline"
                    className="w-full"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}