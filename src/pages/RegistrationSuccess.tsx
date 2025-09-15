import { CheckCircle } from "lucide-react";

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg w-full bg- shadow-2xl rounded-2xl p-12 text-center">
        <CheckCircle className="w-20 h-20 text-blue-600 mx-auto mb-8" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to SPARC
        </h1>
        
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          We're delighted to have you onboard. Your registration has been received successfully.
        </p>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          You'll receive a <span className="font-semibold text-gray-900">confirmation email</span> once your verification is completed.
          Please check your inbox and spam folder for updates.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 text-blue-800 rounded-lg p-6 text-left mb-8">
          <p className="font-medium">Stay Connected</p>
          <p className="text-sm mt-1">
            Stay engaged with SPARC to unlock opportunities in mentorship, internships, leadership, and more.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/company/sparcglobal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
        >
          Follow Us on LinkedIn
        </a>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need assistance? Contact us at{" "}
            <a href="mailto:support@sparcglobal.org" className="text-blue-600 hover:text-blue-700 font-medium">
              support@sparcglobal.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}