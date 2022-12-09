import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Pedro. Gil I have 17 years since my 15 years I have 
        been studying and learning to program has not been easy, 
        but with my effort I have improved more and more using new 
        technologies that are on the market.
        </p>

        <br />

        <p className="text-xl">
        I have experience in several areas and I am willing 
        to learn more, my English is mediated and I speak 
        fluently Portuguese work remotely as in person
        </p>
      </div>
    </div>
  );
};

export default About;
