import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function FramerMotion({children}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
        const squareVariants = {
            visible: { opacity: 1,y:0, scale: 1, transition: { duration: 1 } },
            hidden: { opacity: 0, y:'100px' , scale: 1 }
          };
  return (
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
  >
      {children}
  </motion.div>
  )
}
