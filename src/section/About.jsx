import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  // Gen random data
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  const globeEl = useRef();

  useEffect(() => {
    if (!globeEl.current) return;

    const controls = globeEl.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashu00619@@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext font-mono">Hi, I'm Ashutosh</p>
              <p className="grid-subtext font-heading">
                A passionate web developer
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext font-mono">Tech Stack</p>
              <p className="grid-subtext font-heading">
                I am a web developer with a passion for creating beautiful and
                functional websites. I have experience in HTML, CSS, JavaScript,
                and React. I am always looking to learn new technologies and
                improve my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                //showGraticules
                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                //bumpImageUrl="/assets/bump.jpg"
                arcsData={arcsData}
                arcColor={"color"}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
              />
            </div>
            <div>
              <p className="grid-headtext font-mono">
                I work remotely in any timezone
              </p>
              <p className="grid-subtext font-heading">
                I am always open to new opportunities and collaborations. If you
                have a project in mind or just want to say hi, feel free to
                reach out to me. You can contact me via email.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext font-mono">My Journey</p>
              <p className="grid-subtext font-heading">
                I started my journey as a web developer in 2020. Since then, I
                have been working on various projects and have gained a lot of
                experience in the field. I am always looking to learn new
                technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full sm:h-[276px] md:h-[126px] h-fit object-contain sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext font-mono">send me mail @</p>
              <div className="copy-container" onClick={handleCopyEmail}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="email-copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium  font-heading text-gray-gradient text-white">
                  ashu00619@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
