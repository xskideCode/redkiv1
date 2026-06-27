import React from 'react';
import { motion } from 'motion/react';
import { FileText, Camera, Wrench, Shield, CheckCircle2, XCircle } from 'lucide-react';

export function Evidence() {
  const cards = [
    { icon: FileText, title: 'Ownership Docs', desc: 'Receipts and import logs verified against serials.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Camera, title: 'Hardware Photos', desc: 'Visual inspection of screws, casing, and seals.', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Wrench, title: 'Diagnostic Run', desc: 'Battery health, sensor checks, and logic board status.', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  ];

  return (
    <section className="py-32 bg-[#111111] relative border-y border-[#27272a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-white mb-6 leading-tight">
              Documents. Photos. Diagnostics. <br/>
              <span className="text-[#71717a]">One evidence trail.</span>
            </h2>
            <p className="text-xl text-[#a1a1aa] mb-8 max-w-lg leading-relaxed">
              We compile every piece of data into a single, undeniable case file for each device.
            </p>
          </div>
          
          <div className="relative h-[400px]">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: i * 20, rotate: (i - 1) * 8 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-[#18181b] border border-[#27272a] p-6 rounded-2xl shadow-2xl origin-bottom"
                style={{ zIndex: i }}
              >
                <div className={`w-12 h-12 rounded-full ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-[#a1a1aa]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Score Section */}
        <div className="bg-[#0a0a0a] border border-[#27272a] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
             <div className="flex justify-center">
               <motion.div 
                 initial={{ scale: 0.5, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", bounce: 0.5 }}
                 className="relative w-64 h-64"
               >
                 <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#27272a" strokeWidth="8" />
                   <motion.circle 
                     cx="50" cy="50" r="45" fill="none" 
                     stroke="#ef4444" strokeWidth="8" 
                     strokeDasharray="283" 
                     initial={{ strokeDashoffset: 283 }}
                     whileInView={{ strokeDashoffset: 283 - (283 * 0.86) }}
                     viewport={{ once: true }}
                     transition={{ duration: 2, ease: "easeOut" }}
                     strokeLinecap="round"
                   />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-6xl font-bold text-white tracking-tight">86</span>
                   <span className="text-sm font-bold text-[#71717a] uppercase tracking-widest mt-1">Trust Score</span>
                 </div>
               </motion.div>
             </div>

             <div>
               <h3 className="text-3xl font-bold tracking-tight text-white mb-6">A score you can understand.</h3>
               <div className="space-y-4">
                 {[
                   { label: 'Blacklist Check', status: 'pass', desc: 'Not reported stolen or lost.' },
                   { label: 'Parts Authenticity', status: 'pass', desc: 'Screen and battery are OEM.' },
                   { label: 'Finance Lock', status: 'pass', desc: 'No active device loans.' },
                   { label: 'Battery Health', status: 'warn', desc: 'Currently at 82% capacity.' }
                 ].map((check, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex items-start gap-4 p-4 bg-[#18181b] border border-[#27272a] rounded-xl group"
                   >
                     {check.status === 'pass' ? (
                       <CheckCircle2 className="w-6 h-6 text-[#10b981] shrink-0" />
                     ) : (
                       <AlertCircle className="w-6 h-6 text-[#f59e0b] shrink-0" />
                     )}
                     <div>
                       <h5 className="font-bold text-white">{check.label}</h5>
                       <p className="text-sm text-[#a1a1aa]">{check.desc}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Temporary import for AlertCircle since it's used in the array above
import { AlertCircle } from 'lucide-react';
