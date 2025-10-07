import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.2,
        }}
      ></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">SPARC Blog</h1>
        <p className="text-xl text-gray-300">Coming Soon...</p>
      </div>
    </div>
  );
};

export default BlogPage;