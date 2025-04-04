'use client';

import React, { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

const CallToAction = () => {

  const [isHover, setIsHover] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate]= useAnimate();
  
  useEffect(()=>{
    animation.current = animate(scope.current, { x: '-50%' }, { duration:30, ease:'linear', repeat: Infinity })
  },[animate, scope]);

  useEffect(()=>{
    if (animation.current) {
      if (isHover) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHover]);
  return (
    <section className="py-24">
      <div className="overflow-x-hidden p-4 flex">
        <motion.div 
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>setIsHover(false)}  
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex- items-center gap-16">
              <div>
                <span className="text-lime-400 text-7xl">&#10038;</span>
                <span className="group-hover:text-lime-400">Try it for free</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
