import React from "react";
import { circleImg } from "../../content/constant";

const workProcess = [
  {
    id: 1,
    title: "Strategic Analysis",
    desc: "Deep dive into your business objectives, target audience, market positioning, and competitive landscape to understand your unique requirements.",
  },
  {
    id: 2,
    title: "Project Planning & Architecture",
    desc: "Develop comprehensive project roadmap with detailed technical architecture, feature specifications, and clear milestones for successful delivery.",
  },
  {
    id: 3,
    title: "Design & User Experience",
    desc: "Create intuitive wireframes and interactive prototypes that prioritize user experience, ensuring seamless navigation and engagement.",
  },
  {
    id: 4,
    title: "Development & Quality Assurance",
    desc: "Build robust solutions using cutting-edge technologies, followed by comprehensive testing across multiple devices and platforms.",
  },
  {
    id: 5,
    title: "Deployment & Optimization",
    desc: "Launch your solution with minimal disruption, followed by performance optimization and ongoing monitoring for peak efficiency.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="z-[-1] absolute top-[2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
        loading="lazy"
      />
      <img
        data-aos="fade-up-right"
        src={circleImg}
        className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
        loading="lazy"
      />
      <div className="wrapper space-y-3">
        <h3 className="text1 text-center">
          Our Proven
          <br />
          <span className="text-primary">Development Methodology</span>
        </h3>
        <p
          data-aos="fade-up"
          className="desc text-center max-w-4xl mx-auto text-[#FEFEFE]"
        >
          We follow a systematic approach that ensures every project delivers
          exceptional results. Our methodology combines strategic thinking,
          technical excellence, and collaborative development to transform your
          vision into a powerful digital solution.
        </p>
        <div className="pt-5 flex flex-wrap justify-center gap-5 sm:gap-7 max-w-5xl mx-auto">
          {workProcess.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="group hover:bg-gradient-to-b from-primary/30 to-primary/10 
              flex flex-col gap-3 p-5 sm:p-8 rounded-2xl border-2 border-white/40 
              transition-colors duration-500 sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.5%-1.5rem)]"
            >
              <h4 className="text3 text-primary1 group-hover:text-white">
                {item.title}
              </h4>
              <p className="text-[#FEFEFE] group-hover:text-[#D6D6A6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
