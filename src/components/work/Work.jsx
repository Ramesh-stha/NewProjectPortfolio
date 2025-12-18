import React from "react";
import { useState } from "react";
import { Project } from "../../Constant.js";
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handelOpenModel = (project) => {
    setSelectedProject(project);
  };
  const handelCloseModel = () => {
    setSelectedProject(null);
  };
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative font-sans"
    >
      {/*section title*/}
      <div className="text-center mb-16">
        <h2 className="text-4xl text-white font-bold">PROJECTS</h2>
        <div className="w-32 bg-purple-500 h-1 mx-auto mt-4"></div>
        <p className="font-semibold text-lg text-gray-400 mt-4">
          This are my project that i have worked on,highlighting my skills and
          experiences.
        </p>
      </div>
      {/*projects grid*/}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {Project.map((project) => (
          <div
            key={project.id}
            onClick={() => handelOpenModel(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 rounded-xl object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
            </div>
            <div className="mb-4 p-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#251f38] font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[80%] md:w-[60%] lg:w-[50%] max-h-[85vh] overflow-y-auto relative">
            {/* Close Button */}
            <div className="flex justify-end p-4 sticky top-0 bg-gray-900 z-10">
              <button
                onClick={handelCloseModel}
                className="text-white hover:text-purple-500 font-bold text-3xl"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col items-center px-4 pb-6">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-[90%] max-h-[50vh] object-contain rounded-xl shadow-lg mb-6"
              />

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6 text-sm text-center px-4">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                >
                  Go Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
