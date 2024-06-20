"use client"
import React from "react";
import Image from "next/image";

const AboutSection = () => {

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image className="hidden sm:block" src="/images/about-image.jpg" width={500} height={500} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a motivated 3rd-year undergraduate student at Delhi Technological University, pursuing a Bachelor of Technology in Software Engineering. With a keen interest in crafting immersive and dynamic web experiences, I excel as a full-stack web developer.
My expertise spans a wide array of technologies, including JavaScript, React, Redux, Node.js, Express, MongoDB, SQL, HTML, CSS, and Git. I am adept at building interactive and responsive web applications that meet both user needs and business objectives.
As a quick learner, I am continuously seeking opportunities to expand my knowledge and refine my skill set. I thrive in collaborative environments and am eager to leverage my skills as a team player to contribute to the creation of exceptional applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;