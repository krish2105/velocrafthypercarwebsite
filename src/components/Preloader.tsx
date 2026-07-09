import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-brand-black flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <motion.h1 
              className="font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] text-brand-carbon/30 select-none"
            >
              VELOCRAFT
            </motion.h1>
          </div>
          
          <div className="relative z-10 flex flex-col items-center mt-20">
            <div className="text-brand-gold font-heading font-bold text-4xl mb-4">
              {Math.min(progress, 100)}%
            </div>
            <div className="w-48 h-1 bg-brand-graphite rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
