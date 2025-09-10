import { useEffect } from "react";

export default function SparcForm() {
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
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Heading */}
      <div className="bg-white shadow-sm py-6 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          SPARC Membership Registration
        </h1>
        <p className="mt-2 text-gray-500">
          Please fill out the form below to complete your membership.
        </p>
      </div>

      {/* Main Content */}
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
          ></iframe>
        </div>
      </main>
    </div>
  );
}