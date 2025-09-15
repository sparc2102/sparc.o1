import { useEffect, useState } from "react";

export default function SparcForm() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll<HTMLIFrameElement>(
          "iframe[data-tally-src]:not([src])"
        ).forEach((e) => {
          e.src = e.dataset.tallySrc || "";
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector(`script[src="${w}"]`) == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }

    // ✅ Listen for Tally submission and form load
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://tally.so") {
        if (event.data?.type === "TALLY_FORM_SUBMIT") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        // Hide loading when form is ready
        if (event.data?.type === "TALLY_FORM_LOADED" || event.data?.type === "TALLY_FORM_READY") {
          setIsLoading(false);
        }
      }
    };

    // Fallback timer to hide loading after 5 seconds
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    window.addEventListener("message", handleMessage);
    
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Handle iframe load event as additional fallback
  const handleIframeLoad = () => {
    // Add a small delay to ensure content is rendered
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Full Screen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
          <div className="text-center">
            {/* Spinner */}
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-6"></div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Loading Registration Form
            </h2>
            <p className="text-gray-500 text-lg">Please wait while we prepare your form...</p>
          </div>
        </div>
      )}

      {/* Main Content - Hidden while loading */}
      <div className={`flex flex-col min-h-screen bg-gray-50 ${isLoading ? 'invisible' : 'visible'} transition-all duration-300`}>
        <div className="bg-white shadow-sm py-6 px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            SPARC Membership Registration
          </h1>
        </div>

        <main className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-5xl">
            <iframe
              data-tally-src="https://tally.so/embed/mDL2BR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="3315"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="SPARC Membership Registration"
              onLoad={handleIframeLoad}
            />
          </div>
        </main>
      </div>
    </>
  );
}