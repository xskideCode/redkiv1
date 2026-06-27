import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden || isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 z-[100] px-6 lg:px-8 py-6 mix-blend-difference text-white pointer-events-none"
      >
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-none border border-white flex items-center justify-center text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-[900] text-xl leading-none tracking-tighter uppercase">REDKI</span>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="text-sm font-mono tracking-widest uppercase text-white flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <span className="hidden sm:inline">MENU</span>
          <Menu className="w-5 h-5" />
        </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-[#e5e5e5] text-black flex flex-col pointer-events-auto"
          >
            {/* Header inside Menu */}
            <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-8 py-6 flex items-center justify-between border-b border-black/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-none border border-black flex items-center justify-center text-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-black font-[900] text-xl leading-none tracking-tighter uppercase">REDKI</span>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono tracking-widest uppercase text-black flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <span className="hidden sm:inline">CLOSE</span>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="w-full max-w-[1920px] mx-auto flex-1 px-6 lg:px-12 py-12 flex flex-col justify-center gap-4 md:gap-8 overflow-y-auto">
              {['How it Works', 'For Shoppers', 'For Sellers', 'Resources', 'Pricing'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                  className="group relative w-max cursor-pointer"
                >
                   <span className="text-4xl md:text-7xl font-[900] tracking-tighter uppercase text-black/20 group-hover:text-black transition-colors duration-300">
                     {item}
                   </span>
                   {/* Striped underline on hover */}
                   <div className="absolute bottom-0 left-0 w-0 h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8cGF0aCBkPSJNLTExIGwxIDEtMSAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] bg-repeat group-hover:w-full transition-all duration-500 ease-out" />
                </motion.div>
              ))}
            </div>

            {/* Footer inside menu */}
            <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-8 py-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex gap-4">
                 <button className="text-sm font-mono tracking-widest uppercase border-b border-black hover:opacity-50">Log In</button>
                 <button className="text-sm font-mono tracking-widest uppercase border-b border-red-500 text-red-500 hover:opacity-50">Get Started</button>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-black/40">
                Operating System v1.0
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
