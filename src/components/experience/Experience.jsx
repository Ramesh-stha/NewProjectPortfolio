
import React from "react";
import { Experiences } from "../../Constant.js"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {Experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={experience.id ?? index} className="relative mb-16">
              {/* Timeline Circle (centered) */}
              <div className="absolute sm:left-1/2 left-0 top-6 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Two column layout: left column and right column.
                  Use order to place content on the desired side of the center line. */}
              <div className="sm:flex sm:items-start">
                {/* Left column (empty or content depending on order) */}
                <div className={`sm:w-1/2 sm:px-6 ${isLeft ? "order-1" : "order-2"}`}>
                  {/* when not left, place content here */}
                  {!isLeft && (
                    <div className="bg-gray-900 p-6 rounded-2xl border border-white/10 shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <img src={experience.img} alt={experience.company} className="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">{experience.role}</h3>
                          <h4 className="text-md sm:text-sm text-gray-300">{experience.company}</h4>
                          <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-400">{experience.desc}</p>
                      <div className="mt-4">
                        <h5 className="font-medium text-white">Skills:</h5>
                        <ul className="flex flex-wrap mt-2">
                          {experience.skills.map((skill, i) => (
                            <li key={i} className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right column (empty or content depending on order) */}
                <div className={`sm:w-1/2 sm:px-6 ${isLeft ? "order-2" : "order-1"}`}>
                  {isLeft && (
                    <div className="bg-gray-900 p-6 rounded-2xl border border-white/10 shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <img src={experience.img} alt={experience.company} className="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">{experience.role}</h3>
                          <h4 className="text-md sm:text-sm text-gray-300">{experience.company}</h4>
                          <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-400">{experience.desc}</p>
                      <div className="mt-4">
                        <h5 className="font-medium text-white">Skills:</h5>
                        <ul className="flex flex-wrap mt-2">
                          {experience.skills.map((skill, i) => (
                            <li key={i} className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;