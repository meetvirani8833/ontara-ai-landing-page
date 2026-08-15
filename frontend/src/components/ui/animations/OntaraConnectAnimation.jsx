import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const inbound = 'Hi, is the blue jacket still in stock?';
const reply = "Yes! 🚚 In stock and ships in 3-4 days. Want me to place the order for you?";

export default function OntaraConnectAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const CYCLE = 10000;
    let timers = [];

    const run = () => {
      setStep(0);
      timers = [
        setTimeout(() => setStep(1), 700),
        setTimeout(() => setStep(2), 2400),
        setTimeout(() => setStep(3), 4400),
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
    <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 overflow-hidden z-10">
      {/* Header badge */}
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-white/25 tracking-widest uppercase truncate">
          Multi-tenant · WhatsApp Cloud API · Live
        </span>
      </div>

      {/* Inbound customer message */}
      <motion.div
        animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }}
        transition={{ duration: 0.45, ease }}
        className="mb-2 md:mb-3 flex justify-start"
      >
        <div className="inline-flex items-start gap-1.5 md:gap-2 bg-white/[0.06] border border-white/10 rounded-lg md:rounded-xl px-2.5 py-1.5 md:px-3.5 md:py-2.5 max-w-[92%] sm:max-w-[88%] lg:max-w-[78%]">
          <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-sans text-white/78 leading-relaxed">
            {inbound}
          </p>
        </div>
      </motion.div>

      {/* AI auto-reply */}
      <motion.div
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
        transition={{ duration: 0.45, ease }}
        className="flex justify-end"
      >
        <div className="inline-flex items-start gap-1.5 md:gap-2 bg-emerald-400/[0.10] border border-emerald-400/20 rounded-lg md:rounded-xl px-2.5 py-1.5 md:px-3.5 md:py-2.5 max-w-[92%] sm:max-w-[88%] lg:max-w-[78%]">
          <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-sans text-white/85 leading-relaxed">
            {reply}
          </p>
        </div>
      </motion.div>

      {/* Lead captured status */}
      <motion.div
        animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 12 }}
        transition={{ duration: 0.55, ease }}
        className="mt-auto flex items-center justify-between gap-3"
      >
        <div className="min-w-0">
          <div className="text-[7px] md:text-[8px] lg:text-[9px] font-mono uppercase tracking-[0.24em] text-white/30 truncate">
            Lead pipeline
          </div>
          <div className="text-[8px] md:text-[9px] lg:text-xs text-white/55 mt-0.5 truncate">
            Auto-captured from this conversation
          </div>
        </div>

        <div className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] font-mono uppercase tracking-wider text-emerald-300">
          Lead captured
        </div>
      </motion.div>
    </div>
  );
}
