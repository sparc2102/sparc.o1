import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (!supabase) {
      setError('Supabase client is not initialized.');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage(
        'If the email is registered, you will receive a password reset link.'
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4">
      <Card className="w-full max-w-md p-8 shadow-lg rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Reset your password
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email address and we’ll send you instructions to reset your password.
        </p>

        {message && (
          <div className="text-green-600 text-sm mb-4 p-2 bg-green-50 border border-green-200 rounded-md">
            {message}
          </div>
        )}
        {error && (
          <div className="text-red-600 text-sm mb-4 p-2 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handlePasswordReset} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              placeholder="you@example.com"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 rounded-lg font-medium"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            Back to Login
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
