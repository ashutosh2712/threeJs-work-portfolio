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
    <section className="c-space my-20" id="about">
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
                I am a passionate Full Stack Developer experienced in building
                scalable, production-ready applications across frontend,
                backend, cloud, and microservices. I enjoy solving complex
                engineering problems, learning new technologies, and turning
                ideas into reliable products.
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
                I work across the full stack, using React, Next.js, TypeScript,
                JavaScript, Node.js, Scala, and Python, backed by Django,
                FastAPI, PostgreSQL, and MySQL, with AWS, GCP, Docker, Kafka,
                GraphQL, gRPC, Elasticsearch, and OpenAI.
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
              <p className="grid-headtext font-mono">Open to work Worldwide</p>
              <p className="grid-subtext font-heading">
                Based in India, but open to remote opportunities across the
                globe. I’m comfortable collaborating with distributed teams and
                working across different time zones
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
                With 4+ years of professional experience, my journey has taken
                me from building full-stack applications at Intel to working on
                SaaS platforms, cloud infrastructure, and scalable systems. Over
                the years, I’ve grown from developing web applications to
                designing microservices, serverless architectures, APIs, and
                cloud solutions, working across technologies like React, Python,
                Scala, Node.js, AWS, GCP, and Docker. Today, I focus on solving
                complex engineering problems and building scalable, reliable,
                production-ready systems.
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
