import React from "react";
import heroImg from "/img/hero_bg.jpg";

const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      className="font-body bg-background text-text px-6 py-24 pt-28 md:pt-30"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row">
        <div className="flex-1">
          <h1 className="font-heading mb-4 text-5xl">
            Calm Luxury <span className="text-accent">for Everyday Spaces</span>
          </h1>
          <p className="mb-6 text-lg text-balance opacity-90">
            Curated modern home goods designed for comfort, style, and serenity.
          </p>
          <a
            href="#products"
            className="bg-primary hover:bg-accent rounded-xl px-6 py-3 font-medium text-white transition"
          >
            Explore Collection
          </a>
        </div>

        <div className="flex-1 justify-self-end">
          <img
            src={heroImg}
            alt="Minimalist Living Room"
            className="max-h-[500px] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
