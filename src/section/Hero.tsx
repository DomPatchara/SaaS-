import React from "react";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container mt-9">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
          Impactful design, <br />
          created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          sunt? Tempora ratione magni recusandae ullam, harum doloremque nostrum
          eligendi ipsa officia perferendis dolores, earum hic inventore id.
          Exercitationem, optio nulla.
        </p>
        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 focus:outline-none flex-1"
          />
          <Button type="submit" variant="primary" className="whitespace-nowrap">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
