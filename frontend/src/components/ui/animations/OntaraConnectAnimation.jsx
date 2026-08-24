import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const contacts = [
  { initial: 'A', name: 'Alex', snippet: 'Thanks, got it!' },
  { initial: 'S', name: 'Sam', snippet: "What's the price?" },
  { initial: 'P', name: 'Priya', active: true },
  { initial: 'R', name: 'Rohan', snippet: 'Perfect, thank you' },
];

export default function OntaraConnectAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const CYCLE = 10000;
    let timers = [];

    const run = () => {
      setStep(0);
      timers = [
        setTimeout(() => setStep(1), 700),   // customer message arrives
        setTimeout(() => setStep(2), 2200),  // AI agent typing
        setTimeout(() => setStep(3), 3200),  // AI agent replies
        setTimeout(() => setStep(4), 5200),  // lead captured
      ];
    };

    run();
    const interval = setInterval(run, CYCLE);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="absolute inset-0 flex overflow-hidden z-10">

      {/* ─── LEFT: contact list (~28%) ─── */}
      <div className="w-[30%] sm:w-[28%] h-full border-r border-white/10 bg-white/[0.015] flex flex-col shrink-0">
        <div className="flex items-center gap-1.5 px-2 md:px-2.5 py-2 md:py-2.5 border-b border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00a884] animate-pulse" />
          <span className="text-[6px] sm:text-[7px] md:text-[8px] font-mono text-white/30 tracking-widest uppercase">Live Inbox</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          {contacts.map((c) => (
            <div
              key={c.name}
              className={`flex items-center gap-1.5 px-2 md:px-2.5 py-1.5 md:py-2 border-l-2 ${
                c.active ? 'border-[#00a884] bg-[#00a884]/[0.06]' : 'border-transparent'
              }`}
            >
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2a3942] flex items-center justify-center text-white text-[6px] md:text-[7px] font-bold shrink-0">
                {c.initial}
              </div>
              <div className="min-w-0 flex-1">
                <div className={`text-[6.5px] sm:text-[7px] md:text-[8px] font-sans font-semibold truncate ${c.active ? 'text-white' : 'text-white/60'}`}>
                  {c.name}
                </div>
                {c.active ? (
                  <div className={`text-[5.5px] sm:text-[6px] md:text-[7px] font-mono truncate transition-colors ${step >= 4 ? 'text-[#00a884]' : 'text-white/25'}`}>
                    {step >= 4 ? 'Lead captured' : step === 2 ? 'typing…' : 'active now'}
                  </div>
                ) : (
                  <div className="text-[5.5px] sm:text-[6px] md:text-[7px] font-mono text-white/25 truncate">{c.snippet}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── RIGHT: live conversation (~72%) ─── */}
      <div className="flex-1 h-full flex flex-col p-2 sm:p-2.5 md:p-4 lg:p-5 min-w-0">

        {/* Active contact header */}
        <div className="flex items-center gap-2 mb-2 md:mb-3 pb-2 md:pb-3 border-b border-white/10 shrink-0">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#2a3942] flex items-center justify-center text-white text-[8px] md:text-[9px] font-bold shrink-0">
            P
          </div>
          <div className="min-w-0">
            <div className="text-[8px] sm:text-[9px] md:text-[10px] font-sans font-semibold text-white/85 truncate">Priya</div>
            <div className="text-[6px] sm:text-[7px] md:text-[8px] font-mono text-white/30 truncate">
              {step === 2 ? 'AI Agent typing…' : 'Online · WhatsApp'}
            </div>
          </div>
        </div>

        {/* Chat thread */}
        <div className="flex flex-col gap-1.5 md:gap-2 flex-1 min-h-0">
          <motion.div
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }}
            transition={{ duration: 0.4, ease }}
            className="flex justify-start"
          >
            <div className="bg-[#1f2c34] text-[#e9edef] rounded-lg rounded-tl-sm px-2 py-1.5 md:px-2.5 md:py-2 max-w-[85%] shadow-sm">
              <p className="text-[7.5px] sm:text-[8.5px] md:text-[10px] lg:text-xs font-sans leading-relaxed">Hi, is the blue jacket in stock?</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: step === 2 ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex justify-end"
          >
            <div className="bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5 md:py-2 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-white/50 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1 h-1 rounded-full bg-white/50 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1 h-1 rounded-full bg-white/50 animate-bounce" />
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 8 }}
            transition={{ duration: 0.4, ease }}
            className="flex justify-end"
          >
            <div className="bg-[#005c4b] text-[#e9edef] rounded-lg rounded-tr-sm px-2 py-1.5 md:px-2.5 md:py-2 max-w-[88%] shadow-sm">
              <div className="text-[#6fe3c4] text-[5.5px] sm:text-[6px] md:text-[7px] font-bold mb-0.5 tracking-wide uppercase">AI Agent</div>
              <p className="text-[7.5px] sm:text-[8.5px] md:text-[10px] lg:text-xs font-sans leading-relaxed">
                Yes! 🚚 Ships in 3-4 days. Place the order?
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fake input bar, like the real app */}
        <div className="mt-2 md:mt-3 flex items-center gap-1.5 shrink-0">
          <div className="flex-1 h-5 md:h-6 rounded-full bg-white/[0.04] border border-white/10 px-2.5 flex items-center">
            <span className="text-[6px] sm:text-[6.5px] md:text-[7.5px] font-sans text-white/20">Type a message…</span>
          </div>
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
