import React from "react";
import { ContainerScroll } from "./container-scroll-animation";


const Hero = () => {
  return (
    <section className="relative w-full bg-background dark:bg-gray-900 py-20">
  
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
        {/* Heading */}
        <h1 className="text-[64px] md:text-[64px] font-extrabold leading-tight text-text dark:text-white">
          Automate Resume Tailoring{" "}
          <span className="text-primary">with Generative AI</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 max-w-2xl">
          Upload, analyze, and create professional resumes effortlessly. Get
          your resume noticed by applicant tracking systems and hiring managers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button className="bg-primary hover:bg-primary-hover px-6 py-3 rounded-xl text-lg font-semibold text-white shadow-md transition-all duration-300">
            Build Resume
          </button>
          <button className="border border-border hover:bg-background-alt dark:hover:bg-gray-800 px-6 py-3 rounded-xl text-lg font-semibold text-text dark:text-white transition-all duration-300">
            Analyze ATS Score
          </button>
        </div>
      </div>

      <ContainerScroll />
    </section>
  );
};

export default Hero;
