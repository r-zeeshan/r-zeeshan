import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

// Fade in animation variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
};

// Slide up animation variants
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Scale animation variants
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Stagger children animation
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Fade in component
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = "",
  ...props 
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, threshold: 0.1 }}
    variants={fadeInVariants}
    transition={{ delay, duration }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Slide up component
export const SlideUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "",
  ...props 
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, threshold: 0.1 }}
    variants={slideUpVariants}
    transition={{ delay, duration }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Scale component
export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "",
  ...props 
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, threshold: 0.1 }}
    variants={scaleVariants}
    transition={{ delay, duration }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger container component
export const StaggerContainer = ({ 
  children, 
  className = "",
  ...props 
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, threshold: 0.1 }}
    variants={staggerContainerVariants}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Smooth scroll component
export const SmoothScroll = ({ 
  children, 
  to, 
  className = "",
  ...props 
}: {
  children: ReactNode;
  to: string;
  className?: string;
  [key: string]: any;
}) => {
  const handleClick = () => {
    const element = document.getElementById(to);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
