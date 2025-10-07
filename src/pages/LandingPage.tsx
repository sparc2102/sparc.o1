"use client";

import React, { useEffect, useRef, useState } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Quote, LinkIcon } from 'lucide-react';
import { 
  features, missionObjectives, strategicPillars, topCards, bottomCards, 
  testimonials, mockEvents, membershipTiers, FeatureCard, ColorKey 
} from '../data/mockData';

// Animation Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Cache utility functions
interface CachedData {
  data: any;
  timestamp: number;
}

const CACHE_KEY = 'sparc_landing_data';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

const getCachedData = (key: string): any | null => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    const { data, timestamp }: CachedData = JSON.parse(cached);
    const now = new Date().getTime();
    if (now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(key); // Clear stale cache
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

const setCachedData = (key: string, data: any) => {
  try {
    const cache: CachedData = {
      data,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem(key, JSON.stringify(cache));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

// Aurora Shader (unchanged)
const VERTEX_SHADER = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform vec2 uMouse;

out vec4 fragColor;

vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}

float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m; m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

struct ColorStop { vec3 color; float position; };
#define COLOR_RAMP(colors,factor,finalColor){ \
  int index=0; \
  for(int i=0;i<2;i++){ \
    ColorStop currentColor=colors[i]; \
    bool inBetween=currentColor.position<=factor; \
    index=int(mix(float(index),float(i),float(inBetween))); \
  } \
  ColorStop currentColor=colors[index]; \
  ColorStop nextColor=colors[index+1]; \
  float range=nextColor.position-currentColor.position; \
  float lerpFactor=(factor-currentColor.position)/range; \
  finalColor=mix(currentColor.color,nextColor.color,lerpFactor); \
}

void main(){
  vec2 uv=gl_FragCoord.xy/uResolution;
  vec2 m = uMouse / uResolution;

  ColorStop colors[3];
  colors[0]=ColorStop(uColorStops[0],0.0);
  colors[1]=ColorStop(uColorStops[1],0.5);
  colors[2]=ColorStop(uColorStops[2],1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float noise = snoise(vec2(uv.x * 3.0, uTime * 0.2 + m.x * 0.5));
  float waveHeight = uv.y - (noise * 0.15 * uAmplitude);

  float fade = smoothstep(0.0, 0.4, uv.y);
  waveHeight = mix(uv.y, waveHeight, fade);

  float core = 0.5;
  float intensity = smoothstep(core - uBlend, core + uBlend, waveHeight);
  
  vec3 auroraColor = intensity * rampColor;
  float auroraAlpha = intensity;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
}

function AuroraShader({
  colorStops = ["#1e3a8a", "#3b82f6", "#1e3a8a"],
  amplitude = 1.2,
  blend = 0.6,
  speed = 0.8,
}: AuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) delete geometry.attributes.uv;

    const program = new Program(gl, {
      vertex: VERTEX_SHADER,
      fragment: FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uBlend: { value: blend },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        uColorStops: {
          value: colorStops.map((hex) => {
            const c = new Color(hex);
            return [c.r, c.g, c.b];
          }),
        },
        uMouse: { value: [0, 0] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    container.appendChild(gl.canvas);

    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };
    window.addEventListener("resize", resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x += (e.clientX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (e.clientY - mouseRef.current.y) * 0.05;
    };
    window.addEventListener("mousemove", onMouseMove);

    let animationId: number;

    const animate = (t: number) => {
      animationId = requestAnimationFrame(animate);
      program.uniforms.uTime.value = t * 0.001 * speed;
      program.uniforms.uAmplitude.value = amplitude;
      program.uniforms.uBlend.value = blend;
      program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
      renderer.render({ scene: mesh });
    };
    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (gl.canvas.parentNode === container) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [amplitude, blend, colorStops, speed]);

  return <div ref={containerRef} className="absolute inset-0" />;
}

// Split Scrolling Features Component
const SplitScrollingFeatures = ({ topCards, bottomCards }: { topCards: FeatureCard[], bottomCards: FeatureCard[] }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const colorClasses: Record<ColorKey, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-blue-300' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'hover:border-green-300' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-300' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'hover:border-orange-300' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-300' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'hover:border-yellow-300' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'hover:border-pink-300' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'hover:border-teal-300' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'hover:border-red-300' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'hover:border-cyan-300' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'hover:border-emerald-300' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'hover:border-amber-300' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'hover:border-violet-300' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'hover:border-rose-300' },
    lime: { bg: 'bg-lime-100', text: 'text-lime-600', border: 'hover:border-lime-300' },
    sky: { bg: 'bg-sky-100', text: 'text-sky-600', border: 'hover:border-sky-300' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'hover:border-gray-400' }
  };

  const renderCard = (card: FeatureCard, index: React.Key | null | undefined) => {
    const Icon = card.icon;
    const colors = colorClasses[card.color as ColorKey];

    return (
      <div 
        key={index}
        className={`bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 group ${colors.border} w-64 sm:w-80 flex-shrink-0 feature-card-${card.color}`}
      >
        <div className="flex items-center mb-3 sm:mb-4">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.bg} rounded-full flex items-center justify-center mr-2 sm:mr-3`}>
            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.text}`} />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">{card.title}</h3>
            <p className={`text-xs sm:text-sm ${colors.text}`}>{card.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm">
          {card.description}
        </p>
      </div>
    );
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-12 sm:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-full">
        <motion.div
          variants={childVariants}
          className="scroll-container-top mb-6 sm:mb-8 overflow-hidden"
        >
          <div className="flex scroll-left">
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0">
              {topCards.map((card, index) => renderCard(card, index))}
            </div>
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0 ml-4 sm:ml-6">
              {topCards.map((card, index) => renderCard(card, `duplicate-top-${index}`))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="text-center py-10 sm:py-16 px-4"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose SPARC?
          </h2>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="scroll-container-bottom mt-6 sm:mt-8 overflow-hidden"
        >
          <div className="flex scroll-right">
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0">
              {bottomCards.map((card, index) => renderCard(card, index))}
            </div>
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0 ml-4 sm:ml-6">
              {bottomCards.map((card, index) => renderCard(card, `duplicate-bottom-${index}`))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Landing Page Component
export function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const heroImageUrl = ''; // Replace with your image URL
  const heroMediaUrl = heroImageUrl;

  // State for cached data
  const [cachedData, setCachedData] = useState({
    features,
    missionObjectives,
    strategicPillars,
    topCards,
    bottomCards,
    testimonials,
    mockEvents,
    membershipTiers,
  });

  useEffect(() => {
    // Check for cached data
    const cached = getCachedData(CACHE_KEY);
    if (cached) {
      setCachedData(cached);
    } else {
      // Cache the imported mock data
      setCachedData({
        features,
        missionObjectives,
        strategicPillars,
        topCards,
        bottomCards,
        testimonials,
        mockEvents,
        membershipTiers,
      });
    }
  }, []);

  // Currency and Pricing Data
  const [selectedCurrency, setSelectedCurrency] = useState<string>('INR');
  const currencyOptions = [
    { value: 'INR', label: 'INR' },
    { value: 'USD', label: 'USD' },
    { value: 'AED', label: 'AED' },
    { value: 'SAR', label: 'SAUDI RIYAL' },
    { value: 'OMR', label: 'OMAN RIYAL' },
    { value: 'EUR', label: 'EUROS' },
    { value: 'AUD', label: 'AUS DOLLARS' },
  ];

  const premiumPrices: { [key: string]: string } = {
    INR: '₹5000 /year',
    USD: '$199 /year',
    EUR: '€179 /year',
    AED: 'AED 599 /year',
    SAR: 'SAR 599 /year',
    OMR: 'OMR 59 /year',
    AUD: 'AUD 299 /year',
  };

  const vipPrices: { [key: string]: string } = {
    INR: '₹15,000 /year',
    USD: '$599 /year',
    EUR: '€539 /year',
    AED: 'AED 1,799 /year',
    SAR: 'SAR 1,799 /year',
    OMR: 'OMR 179 /year',
    AUD: 'AUD 899 /year',
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [pillarsRef, pillarsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [membershipRef, membershipInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const upcomingEvents = cachedData.mockEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  function isVideo(heroMediaUrl: string): boolean {
    if (!heroMediaUrl) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => heroMediaUrl.toLowerCase().endsWith(ext));
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <AuroraShader />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            opacity: 0.1,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-1 lg:order-2 col-span-2">
              <div className="text-left">
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 text-white leading-none">
                  SPARC
                </h1>
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-4 sm:mb-6 font-semibold">
                  Society For Pharmacy Advancement Research & Careers
                </h2>
                <p className="text-sm sm:text-lg lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  The Gold Standard for Pharma Collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {user ? (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out rounded-xl group py-2 sm:py-3"
                      onClick={() => navigate("/dashboard")}
                    >
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  ) : (
                    <>
                      <Link to="/sparcform">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out rounded-xl group py-2 sm:py-3 w-full sm:w-auto"
                        >
                          Join SPARC Today
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                      <Link to="/about">
                        <Button
                          size="sm"
                          className="bg-blue-100 text-blue-700 font-semibold border border-blue-700 shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out rounded-xl group py-2 sm:py-3 w-full sm:w-auto"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        ref={visionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div variants={childVariants}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Vision
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                To emerge as the <span className="font-bold text-blue-600">global force</span> uniting pharma education, research, and industry application — shaping the future of healthcare.
              </p>
            </motion.div>
            <motion.div variants={childVariants}>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Mission Objectives
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={visionInView ? "visible" : "hidden"}
                className="space-y-4 sm:space-y-6"
              >
                {cachedData.missionObjectives.map((objective, index) => {
                  const Icon = objective.icon;
                  return (
                    <motion.div
                      variants={childVariants}
                      key={index}
                      className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-3 sm:gap-4"
                    >
                      <div className="bg-blue-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                          {objective.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          {objective.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Pillars Section */}
      <motion.section
        ref={pillarsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={pillarsInView ? "visible" : "hidden"}
        className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900 relative overflow-hidden"
      >
  
        {/* Animated Water Drop Ripple Waves */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Wave Ring 1 */}
          <div className="absolute w-4 h-4 border-2 border-gray-400/30 rounded-full" style={{
            animation: 'ripple1 8s linear infinite'
          }}></div>
          
          {/* Wave Ring 2 */}
          <div className="absolute w-4 h-4 border-2 border-gray-500/25 rounded-full" style={{
            animation: 'ripple2 8s linear infinite 2s'
          }}></div>
          
          {/* Wave Ring 3 */}
          <div className="absolute w-4 h-4 border-2 border-gray-600/20 rounded-full" style={{
            animation: 'ripple3 8s linear infinite 4s'
          }}></div>
        </div>

        {/* CSS Keyframes for cleaner water ripples */}
        <style>{`
          @keyframes ripple1 {
            0% {
              transform: scale(0);
              opacity: 0.7;
              border-width: 2px;
            }
            50% {
              opacity: 0.4;
              border-width: 1px;
            }
            100% {
              transform: scale(50);
              opacity: 0;
              border-width: 1px;
            }
          }
          
          @keyframes ripple2 {
            0% {
              transform: scale(0);
              opacity: 0.6;
              border-width: 2px;
            }
            50% {
              opacity: 0.3;
              border-width: 1px;
            }
            100% {
              transform: scale(60);
              opacity: 0;
              border-width: 1px;
            }
          }
          
          @keyframes ripple3 {
            0% {
              transform: scale(0);
              opacity: 0.5;
              border-width: 2px;
            }
            50% {
              opacity: 0.2;
              border-width: 1px;
            }
            100% {
              transform: scale(70);
              opacity: 0;
              border-width: 1px;
            }
          }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Mobile-first layout */}
<div className="block lg:hidden">
  {/* Central Title for Mobile */}
  <div className="text-center mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-white">
      Strategic Pillars
    </h2>
  </div>

  {/* Grid layout for mobile */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {strategicPillars.map((pillar, index) => (
      <div key={index} className="bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-4 hover:-translate-y-1 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20">
        <h3 className="text-base font-bold text-white mb-2">
          {pillar.title}
        </h3>
        <p className="text-gray-300 text-sm">
          {pillar.description}
        </p>
      </div>
    ))}
  </div>
</div>

{/* Desktop circular layout */}
<div className="hidden lg:block">
  {/* Central Title */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center bg-gray-900 bg-opacity-20 backdrop-blur-md px-8 py-4 rounded-lg border border-gray-200 border-opacity-20">
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Strategic Pillars
    </h2>
  </div>

  {/* Pillars arranged in a circular pattern */}
  <div className="relative z-20 min-h-[700px]">
    
    {/* Top Row Pillars */}
    <div className="absolute top-8 left-1/4 transform -translate-x-1/2">
      <div className="group bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-6 hover:-translate-y-2 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20 w-72">
        <h3 className="text-xl font-bold text-white mb-3">
          Knowledge Dissemination
        </h3>
        <p className="text-gray-300">
          Webinars, panels, thought leaders
        </p>
      </div>
    </div>

    <div className="absolute top-8 right-1/4 transform translate-x-1/2">
      <div className="group bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-6 hover:-translate-y-2 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20 w-72">
        <h3 className="text-xl font-bold text-white mb-3">
          Competency Building
        </h3>
        <p className="text-gray-300">
          Advanced training, workshops, certifications
        </p>
      </div>
    </div>

    {/* Middle Row Pillars */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
      <div className="group bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-6 hover:-translate-y-2 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20 w-72">
        <h3 className="text-xl font-bold text-white mb-3">
          Innovation Incubation
        </h3>
        <p className="text-gray-300">
          Hackathons, accelerators, prototypes
        </p>
      </div>
    </div>

    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <div className="group bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-6 hover:-translate-y-2 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20 w-72">
        <h3 className="text-xl font-bold text-white mb-3">
          Career Propulsion
        </h3>
        <p className="text-gray-300">
          Mentorship, career expos, partnerships
        </p>
      </div>
    </div>

    {/* Bottom Row Pillars */}
    <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2">
      <div className="group bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-6 hover:-translate-y-2 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20 w-72">
        <h3 className="text-xl font-bold text-white mb-3">
          Leadership Cultivation
        </h3>
        <p className="text-gray-300">
          Councils, regional hubs, forums
        </p>
      </div>
    </div>

    <div className="absolute bottom-8 right-1/4 transform translate-x-1/2">
      <div className="group bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-6 hover:-translate-y-2 hover:bg-opacity-30 transition-all duration-300 border border-gray-200 border-opacity-20 w-72">
        <h3 className="text-xl font-bold text-white mb-3">
          Policy Influence
        </h3>
        <p className="text-gray-300">
          Whitepapers, advocacy, reforms
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
      </motion.section>

      {/* Split Scrolling Features Section */}
      <SplitScrollingFeatures topCards={cachedData.topCards} bottomCards={cachedData.bottomCards} />

      {/* Membership Tiers Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              SPARC Membership Tiers
            </h1>
            <p className="text-base sm:text-xl text-white max-w-4xl mx-auto">
              SPARC is a professional networking platform dedicated to advancing pharmaceutical innovations, clinical research, and healthcare development. Choose from our Genesis (Free), Premium, and VIP membership plans designed for professionals at every career stage.
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {cachedData.membershipTiers.map((tier, index) => {
              const Icon = tier.icon;
              const price = tier.name === 'SPARC Genesis' ? tier.price : tier.name === 'SPARC Premium' ? premiumPrices[selectedCurrency] : vipPrices[selectedCurrency];
              return (
                <article key={index} itemScope itemType="https://schema.org/Service">
                  <Card className="bg-gradient-to-br from-gray-900 via-blue-950 to-black backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
                    <CardHeader className="text-center pb-4 sm:pb-6 relative z-30">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${tier.color}-100 bg-opacity-0 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${tier.color}-600`} />
                      </div>
                      <CardTitle>
                        <h2 itemProp="name" className={`text-xl sm:text-4xl font-bold text-${tier.color}-600 mb-3`}>
                          {tier.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-200 font-normal mb-3">{tier.description}</p>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <span itemProp="price">{price.replace('/year', '')}</span>
                          <span itemProp="priceSpecification">/year</span>
                        </div>
                        <span className={`bg-${tier.color}-100 bg-opacity-0 text-${tier.color}-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                          {tier.name === 'SPARC Genesis' ? 'Complimentary' : tier.name === 'SPARC Premium' ? 'Annual Subscription' : 'Invitation-Only'}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 relative z-30">
                      <div className="mb-6 sm:mb-8">
                        <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6">
                          <strong>Eligibility:</strong> {tier.eligibility}
                        </p>
                        <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Core Benefits:</h3>
                        <ul className="space-y-3 mb-6 sm:mb-8" itemProp="features">
                          {tier.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className={`h-3 w-3 sm:h-4 sm:w-4 text-${tier.color}-500 mr-2 mt-1 flex-shrink-0`} />
                              <span className="text-xs sm:text-sm text-gray-200">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className={`bg-${tier.color}-50 bg-opacity-0 p-3 sm:p-4 rounded-lg text-center border border-${tier.color}-200`}>
                          <p className={`text-${tier.color}-500 text-xs sm:text-lg font-medium`}>
                            {tier.name === 'SPARC Genesis' ? 'Kickstart your career with exclusive opportunities' : tier.name === 'SPARC Premium' ? 'Unlock advanced opportunities for growth' : 'Elite Access & Opportunities for Top-Tier Professionals'}
                          </p>
                        </div>
                      </div>
                      {!user && tier.name === 'SPARC Genesis' && (
                        <Link to="/sparcform" state={{ selectedTier: 'genesis' }}>
                          <Button className={`w-full bg-${tier.color}-600 hover:bg-${tier.color}-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base`}>
                            Get Started Free
                          </Button>
                        </Link>
                      )}
                      {!user && tier.name === 'SPARC Premium' && (
                        <a
                          href="https://pages.razorpay.com/pl_RMEa6ViiASX7Zq/view"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Subscribe to SPARC Premium membership"
                        >
                          <Button className={`w-full bg-${tier.color}-600 hover:bg-${tier.color}-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base`}>
                            Subscribe
                          </Button>
                        </a>
                      )}
                      {tier.name === 'SPARC VIP' && (
                        <Button
                          className={`w-full bg-${tier.color}-600 hover:bg-${tier.color}-500 text-white py-3 rounded-lg font-semibold text-sm sm:text-base`}
                          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=support@zanepreod.com", "_blank")}
                        >
                          Contact Us
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <motion.section
        ref={eventsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        className="py-12 sm:py-20 bg-blue-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12"
          >
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Upcoming Events
              </h2>
              <p className="text-base sm:text-xl text-gray-600">
                Join our community for exclusive events and learning opportunities
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2">
                View All Events
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div variants={childVariants} key={event.id}>
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-medium text-white bg-blue-500 px-2 sm:px-3 py-1 rounded-full">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-base sm:text-lg text-gray-900">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                      {event.description}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-500 mb-2">
                      <strong>Speaker:</strong> {event.speaker}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-500">
                        {event.registered}/{event.capacity} registered
                      </span>
                      <Link to={`/events/${event.id}`}>
                        <Button
      size="sm"
      variant="outline"
      className="w-full sm:w-auto border-gray-600 text-black hover:!bg-blue-900 hover:!text-white flex items-center justify-center gap-1"
    >
      <LinkIcon className="h-4 w-4" /> View Details
    </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={childVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              What Our Members Say
            </h2>
            <p className="text-base sm:text-xl text-gray-200">
              Hear from professionals who have transformed their careers with SPARC
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="relative overflow-hidden"
          >
            <div className="flex animate-scroll space-x-4 sm:space-x-6">
              {[...cachedData.testimonials, ...cachedData.testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-72 sm:w-80 sm:h-80 bg-transparent rounded-lg p-4 sm:p-6 flex flex-col justify-between border border-gray-200 opacity-90"
                >
                  <div className="mb-3 sm:mb-4">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300" />
                  </div>
                  <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow text-center">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <span className="text-xs sm:text-sm font-medium text-white">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-300">
                        {testimonial.tier} Member
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}