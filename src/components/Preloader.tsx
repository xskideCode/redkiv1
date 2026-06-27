import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFinished(true), 500); // Wait a beat before animating out
          return 100;
        }
        // Random increment between 5 and 15
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isFinished) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000); // matches the exit animation duration
      return () => clearTimeout(timeout);
    }
  }, [isFinished, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
          
          <div className="flex flex-col items-center relative z-10">
            <div className="overflow-hidden flex gap-2">
              {"REDKI".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="text-6xl md:text-8xl font-[900] tracking-tighter text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-zinc-500 font-mono tracking-widest text-sm flex items-center gap-4"
            >
               <span>LOADING OS</span>
               <span className="w-12 text-right">{Math.min(progress, 100)}%</span>
            </motion.div>
          </div>
          
          {/* Progress bar at the very bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
             <motion.div 
               className="h-full bg-red-500"
               initial={{ width: "0%" }}
               animate={{ width: `${Math.min(progress, 100)}%` }}
               transition={{ ease: "linear", duration: 0.2 }}
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
