import React from "react";
import { twMerge } from "tailwind-merge";

interface FeatureProps { 
    title: string;
    description: string;
    children?: React.ReactNode;
    className?:string
}


const FeatureCard = (props: FeatureProps) => {

    const { title, description, children, className } = props;
  return (
    <div className={twMerge("bg-neutral-900 border border-white/10 p-6 rounded-3xl flex flex-col justify-between", className)}>
      <div className="aspect-video">{children}</div>
      <div className="">
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
