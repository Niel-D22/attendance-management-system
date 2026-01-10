import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ElegantReveal({ children, className = "" }) {
  const containerRef = useRef(null);
  
  // Menghitung progres scroll pada elemen ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start bottom", "end center"] // Mulai saat muncul di bawah, selesai di tengah
  });

  // Animasi Opacity (dari 0.1 ke 1)
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);
  // Animasi Blur (dari 10px ke 0px)
  const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(10px)", "blur(0px)"]);
  // Animasi Rotasi sedikit agar elegan (dari 2 derajat ke 0)
  const rotateX = useTransform(scrollYProgress, [0, 0.8], [2, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        opacity, 
        filter: blur,
        rotateX
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}