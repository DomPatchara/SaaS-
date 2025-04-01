"use client";

import React, { useEffect, useRef, useState } from "react";
import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(' ');

const Introduction = () => {
  
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);

  // Transform map [all length words] to range  --> [0 - 100%]
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(()=>{
    wordIndex.on('change', (latest) =>{
      setCurrentWord(latest);
    })
  }, [wordIndex])


  // check percent scroll change  0 - 100%
  useMotionValueEvent(scrollYProgress, 'change', (latest) => (
    console.log("latest", latest)
  ))
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20">
          <div className="flex justify-center">
            <Tag>Introducing Layer</Tag>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span className="text-white/15">
            {words.map((word, index)=>(
              <span 
                key={index}
                className={twMerge(index < currentWord && 'text-white')}
              >
                {`${word} `}
              </span>
            ))}
            </span>
            <span className="text-lime-400 block">
              That&apos; why we built Layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
