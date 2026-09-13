import React, { Suspense, useState } from "react";
import { calculateSizes, myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const projectCount = myProjects.length;

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="project">
      <p className="head-text font-heading text-white">My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 left-0">
            <img
              src={currentProject.spotlight}
              alt="project-1"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="project-1-logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold font-heading">
              {currentProject.title}
            </p>
            <p className="text-white font-outfit">{currentProject.desc}</p>
            <p className="text-white font-outfit">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <div className="flex  justify-center items-center gap-5">
              <a
                className="cursor-pointer"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github-btn.svg"
                  className="h-12 w-12 rounded-4xl"
                />
              </a>
              <a
                className="cursor-pointer"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn rounded-4xl bg-red-600 px-4 py-2 font-semibold text-white animate-live">
                  LIVE
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn arrow-gradient"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left"
                className="w-4 h-4"
              />
            </button>

            <button
              className="arrow-btn arrow-gradient"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas dpr={2} gl={{ antialias: true }}>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              //enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
