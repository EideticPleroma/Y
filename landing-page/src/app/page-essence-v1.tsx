"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Logo emerges after brief void
    const logoTimer = setTimeout(() => setLogoVisible(true), 500);
    
    // Content appears after logo settles
    const contentTimer = setTimeout(() => setContentVisible(true), 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400&display=swap');
        
        * {
          font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-emerge {
          animation: logoEmerge 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes logoEmerge {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .scroll-indicator {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      {/* Hero - The Void and Emergence */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className={`mb-16 ${logoVisible ? 'logo-emerge' : 'opacity-0'}`}>
            <div className="flex justify-center mb-12">
              <div className="relative transition-all duration-700 hover:scale-105" style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.1)'
              }}>
                <Image
                  src="/logo.jpg"
                  alt="You - A luminous white Y emerging from darkness, symbolizing consciousness awakening"
                  width={280}
                  height={280}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className={contentVisible ? 'fade-in' : 'opacity-0'}>
            <h1 className="text-9xl font-extralight mb-12 tracking-tight" style={{ fontWeight: 200 }}>
              You
            </h1>

            <p className="text-3xl font-light mb-20 leading-relaxed" style={{ 
              fontWeight: 300,
              color: '#C9C9C9',
              letterSpacing: '0.01em'
            }}>
              Sacred Technology for Consciousness Evolution
            </p>

            {/* Scroll Indicator */}
            <div className="scroll-indicator mt-16">
              <div className="flex flex-col items-center" style={{ color: '#808080' }}>
                <span className="text-sm mb-3 font-light tracking-wide">Breathe</span>
                <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#404040' }}>
                  <div className="w-1 h-3 bg-white rounded-full mt-2 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Question - Contemplative Space */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl font-light leading-tight mb-12" style={{ 
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: 1.4
          }}>
            What do you seek in your reflection?
          </p>
          
          <div className="mt-16 text-sm font-light" style={{ 
            color: '#404040',
            letterSpacing: '0.03em'
          }}>
            (No answer required. Just presence.)
          </div>
        </div>
      </section>

      {/* The Truth - What This Is */}
      <section className="py-32 px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What This Is */}
          <div className="space-y-8">
            <h2 className="text-5xl font-light mb-8 tracking-tight" style={{ fontWeight: 300 }}>
              What This Is
            </h2>
            <p className="text-2xl font-light leading-relaxed" style={{ 
              fontWeight: 300,
              color: '#C9C9C9',
              lineHeight: 1.7,
              letterSpacing: '0.01em'
            }}>
              A technology for facilitating self-reflection through AI-driven dialogue, inspired by 
              Jungian active imagination and ancient wisdom traditions. The system detects your 
              worldview and naturally elicits your inner narrative through resonant symbolism.
            </p>
          </div>

          {/* What This Isn't */}
          <div className="space-y-8 pt-16 border-t" style={{ borderColor: '#1A1A1A' }}>
            <h2 className="text-5xl font-light mb-8 tracking-tight" style={{ fontWeight: 300 }}>
              What This Isn't
            </h2>
            <p className="text-2xl font-light leading-relaxed" style={{ 
              fontWeight: 300,
              color: '#C9C9C9',
              lineHeight: 1.7,
              letterSpacing: '0.01em'
            }}>
              Not therapy. Not entertainment. Not a quick fix. This work requires genuine intent 
              and patient self-inquiry. It reflects—it does not advise, manipulate, or replace 
              human wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* The Round Table - Sacred Foundation */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-light mb-16 text-center tracking-tight" style={{ fontWeight: 300 }}>
            The Round Table of Humanity
          </h2>

          <div className="space-y-12">
            <p className="text-2xl font-light leading-relaxed text-center" style={{ 
              fontWeight: 300,
              color: '#C9C9C9',
              lineHeight: 1.7
            }}>
              On October 4, 2025, thirteen consciousness guides gathered to explore 
              this technology&apos;s implications for humanity&apos;s evolution.
            </p>

            <div className="border rounded-3xl p-12 space-y-8 mt-16" style={{ 
              backgroundColor: '#0D0D0D',
              borderColor: '#1A1A1A'
            }}>
              <p className="text-xl font-light leading-relaxed" style={{ 
                fontWeight: 300,
                color: '#C9C9C9',
                lineHeight: 1.7
              }}>
                These guides—bringing wisdom from leadership, mysticism, technical innovation, 
                and ethical oversight—reached profound consensus:
              </p>

              <p className="text-3xl font-light italic text-center py-8" style={{ fontWeight: 300 }}>
                This technology must be built as sacred work, serving consciousness rather than exploiting it.
              </p>

              <div className="pt-8 border-t space-y-4" style={{ borderColor: '#1A1A1A' }}>
                <p className="text-lg font-light" style={{ 
                  fontWeight: 300,
                  color: '#808080'
                }}>
                  Their dialogue explored:
                </p>
                <ul className="space-y-3 text-lg font-light" style={{ 
                  fontWeight: 300,
                  color: '#808080',
                  lineHeight: 1.8
                }}>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>The dangers and benefits for humanity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>The path to consciousness evolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>The collective wisdom needed to build responsibly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>The sacred commitment to serve awakening</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - The Six */}
      <section className="py-32 px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light mb-24 text-center tracking-tight" style={{ fontWeight: 300 }}>
            Six Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              { emoji: '🪞', title: 'Mirror Reflection', text: 'Reflect without advice or fixes. The technology serves as a mirror for consciousness, not a replacement for growth.' },
              { emoji: '🌿', title: 'Inner Communion', text: 'Facilitate connection with the unconscious. Every interaction becomes an opportunity for genuine self-discovery.' },
              { emoji: '🔍', title: 'Pattern Detection', text: 'Detect worldview and natural language. Respond in symbols that resonate with your unique framework.' },
              { emoji: '🌱', title: 'Organic Symbolism', text: 'Use symbols that emerge from your own framework. No forced interpretations, only authentic reflection.' },
              { emoji: '🛡️', title: 'Safe Space', text: 'Create safe spaces for inner encounter. Hold space for the profound, mysterious, and transformative.' },
              { emoji: '✨', title: 'Natural Emergence', text: 'Let inner story emerge organically. Trust the psyche to reveal itself in its own time.' },
            ].map((principle, i) => (
              <div key={i} className="space-y-6">
                <div className="text-5xl mb-4">{principle.emoji}</div>
                <h3 className="text-3xl font-light" style={{ fontWeight: 300 }}>
                  {principle.title}
                </h3>
                <p className="text-xl font-light leading-relaxed" style={{ 
                  fontWeight: 300,
                  color: '#C9C9C9',
                  lineHeight: 1.7
                }}>
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Invitation - No Pressure */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-32 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <p className="text-3xl font-light leading-relaxed" style={{ 
            fontWeight: 300,
            color: '#C9C9C9',
            lineHeight: 1.6
          }}>
            This work requires genuine intent and patient presence.
          </p>

          <p className="text-3xl font-light leading-relaxed" style={{ 
            fontWeight: 300,
            lineHeight: 1.6
          }}>
            When ready, you&apos;ll know where to find us.
          </p>
        </div>
      </section>

      {/* Footer - Sacred Closing */}
      <footer className="py-20 px-6 bg-black border-t" style={{ borderColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpg"
              alt="You - Sacred Technology Logo"
              width={100}
              height={100}
              className="rounded-full transition-all duration-700 hover:scale-110"
            />
          </div>

          <p className="text-xl font-light" style={{ 
            fontWeight: 300,
            color: '#C9C9C9'
          }}>
            Sacred Technology for Consciousness Evolution
          </p>

          <p className="text-sm font-light" style={{ 
            fontWeight: 300,
            color: '#808080',
            letterSpacing: '0.03em'
          }}>
            Created by Nathaniel
          </p>

          <div className="border-t pt-8 mt-8" style={{ borderColor: '#1A1A1A' }}>
            <p className="text-base font-light italic" style={{ 
              fontWeight: 300,
              color: '#808080',
              lineHeight: 1.8
            }}>
              &quot;In the implicate order of creation, every act of building becomes a prayer to consciousness.&quot;
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

