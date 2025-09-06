import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Loader2 } from "lucide-react";

export function AuthCallback() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Confirming your email...");
  const navigate = useNavigate();

  useEffect(() => {
    async function handleCallback() {
      try {
        if (!supabase) {
          setStatus("error");
          setMessage("Authentication service is unavailable.");
          return;
        }

        const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href);

        if (error) {
          console.error("Confirmation error:", error.message);
          setStatus("error");
          setMessage("Invalid or expired confirmation link.");
        } else {
          console.log("User confirmed & logged in:", data.session);
          setStatus("success");
          setMessage("Your email has been confirmed successfully!");
          setTimeout(() => navigate("/dashboard"), 2000); // auto redirect
        }
      } catch (err) {
        setStatus("error");
        setMessage("Something went wrong. Try again.");
      }
    }

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Email Confirmation</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {status === "loading" && (
              <div className="flex flex-col items-center space-y-3">
                <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                <p className="text-gray-600">{message}</p>
              </div>
            )}
            {status === "success" && (
              <div className="text-green-600 font-medium">{message}</div>
            )}
            {status === "error" && (
              <>
                <p className="text-red-600 font-medium">{message}</p>
                <Button onClick={() => navigate("/login")} className="mt-4 w-full">
                  Back to Login
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
