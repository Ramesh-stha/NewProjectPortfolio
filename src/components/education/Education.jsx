import React from "react";
import { EducationInfo } from "../../Constant.js";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A summary of my academic background and educational journey
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {EducationInfo.map((edu, index) => {
          // Flip sides: first card on LEFT (opposite of experience)
          const isLeft = index % 2 !== 0; // <-- key change here
          return (
            <div key={edu.id ?? index} className="relative mb-16">
              {/* Timeline Circle */}
              <div className="absolute sm:left-1/2 left-0 top-6 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Timeline Content (Two-column layout) */}
              <div className="sm:flex sm:items-start">
                {/* Left column */}
                <div className={`sm:w-1/2 sm:px-6 ${isLeft ? "order-1" : "order-2"}`}>
                  {!isLeft && (
                    <div className="bg-gray-900 p-6 rounded-2xl border border-white/10 shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                          <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-400">{edu.desc}</p>
                      <div className="mt-4">
                        <h5 className="font-medium text-white">Grade:</h5>
                        <p className="text-gray-300 mt-1">{edu.grade || edu.grads}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right column */}
                <div className={`sm:w-1/2 sm:px-6 ${isLeft ? "order-2" : "order-1"}`}>
                  {isLeft && (
                    <div className="bg-gray-900 p-6 rounded-2xl border border-white/10 shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                          <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-400">{edu.desc}</p>
                      <div className="mt-4">
                        <h5 className="font-medium text-white">Grade:</h5>
                        <p className="text-gray-300 mt-1">{edu.grade || edu.grads}</p>
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

export default Education;
