import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader() {
  const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
  const [isVisible, setIsVisible] = useState(!hasSeenIntro);

  useEffect(() => {
    if (hasSeenIntro) return;

    // Hide the loader after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenIntro', 'true');
    }, 3500);

    return () => clearTimeout(timer);
  }, [hasSeenIntro]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
        >
          {/* Inner pulsating ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, ease: 'easeOut', times: [0, 0.5, 1] }}
            className="absolute w-32 h-32 rounded-full border border-brand-orange/40 blur-[2px]"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="font-source-serif text-3xl sm:text-5xl text-brand-gold tracking-[0.3em] font-light">
              SHRIMAN SHRIMATI
            </h1>
            <p className="font-montserrat text-brand-orange/80 tracking-[0.2em] text-xs sm:text-sm uppercase">
              Rasoi
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
