"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type RippleLoaderProps = {
  icon?: React.ReactNode;
  size?: number;
  duration?: number;
  logoColor?: string;
};

const RippleLoader: React.FC<RippleLoaderProps> = ({
  icon,
  size = 250,
  duration = 2,
  logoColor = "#6B7280", // Gray-500 for the logo/icon
}) => {
  const baseInset = 40;
  const rippleBoxes = Array.from({ length: 5 }, (_, i) => ({
    inset: `${baseInset - i * 10}%`,
    zIndex: 99 - i,
    delay: i * 0.2,
    opacity: 1 - i * 0.2,
  }));

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      {rippleBoxes.map((box, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-t backdrop-blur-[5px]"
          style={{
            inset: box.inset,
            zIndex: box.zIndex,
            borderColor: `rgba(107, 114, 128, ${box.opacity})`, // Gray-500
            background:
              "linear-gradient(0deg, rgba(75, 85, 99, 0.2), rgba(107, 114, 128, 0.2))", // Gray-600 to Gray-500
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "rgba(55, 65, 81, 0.3) 0px 10px 10px 0px", // Gray-700
              "rgba(55, 65, 81, 0.3) 0px 30px 20px 0px", // Gray-700
              "rgba(55, 65, 81, 0.3) 0px 10px 10px 0px", // Gray-700
            ],
          }}
          transition={{
            repeat: Infinity,
            duration,
            delay: box.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 grid place-content-center p-[30%]">
        <motion.span
          className="w-full h-full"
          animate={{ color: [logoColor, "#D1D5DB", logoColor] }} // Gray-500 to Gray-300
          transition={{
            repeat: Infinity,
            duration,
            ease: "easeInOut",
          }}
        >
          <span
            className="w-full h-full"
            style={{ display: "inline-block", width: "100%", height: "100%" }}
          >
            {icon &&
              React.cloneElement(icon as React.ReactElement, {
                style: {
                  width: "100%",
                  height: "100%",
                  fill: "currentColor",
                },
              })}
          </span>
        </motion.span>
      </div>
    </div>
  );
};

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

    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://tally.so") {
        if (event.data?.type === "TALLY_FORM_SUBMIT") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (event.data?.type === "TALLY_FORM_LOADED" || event.data?.type === "TALLY_FORM_READY") {
          setIsLoading(false);
        }
      }
    };

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    window.addEventListener("message", handleMessage);
    
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleIframeLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
          <RippleLoader size={150} duration={1.5} logoColor="#6B7280" />
        </div>
      )}

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