"use client";

import DataFetcher from "@/utils/dataFetcher";
import { MotionDiv } from "@/utils/motion-div";
import { useInView } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ProjectsPage = () => {
  const ref1 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });

  const data: any = DataFetcher({ dataUrl: "projects" });

  return (
    <div className="md:pt-14 pt-5 mb-10 select-none" id="projects">
      <MotionDiv
        ref={ref1}
        initial={{ opacity: 0, y: 90 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
        transition={{
          duration: 1.0,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex items-end gap-2"
      >
        <div className="max-[880px]:text-6xl max-[570px]:text-4xl text-7xl font-ampersandlight uppercase">
          Projects
        </div>
        <span>
          <ArrowDownLeft
            size={50}
            className="max-[570px]:h-7 max-[570px]:w-7"
          />
        </span>
      </MotionDiv>
      <div className="flex flex-col gap-10 mt-10">
        {data?.results
          .slice()
          .sort((a: any, b: any) => a.data.pos - b.data.pos)
          .map((project: any, index: any) => (
            <MotionDiv
              ref={ref1}
              initial={{ opacity: 0, y: 90 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
              transition={{
                duration: 1.0,
                delay: index * 0.06,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={`flex items-center gap-10 max-[885px]:flex-col 
              ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              key={index}
            >
              <div className="flex-[0.9]">
                <video
                  src={project.data.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover rounded-[4px] opacity-70 hover:scale-110 transition-all hover:opacity-100"
                ></video>
              </div>
              <div
                className={`flex-[1] ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <p className="relative text-2xl font-semibold mb-6">
                  {project?.data.name}
                  <Image
                    src="/line.svg"
                    height={40}
                    width={40}
                    alt="line"
                    className={`
                    h-10 w-32 absolute top-4
                    ${index % 2 === 0 ? "ml-auto right-0" : "mr-auto left-0"}`}
                  />
                </p>
                <p
                  className="text-slate-300"
                  dangerouslySetInnerHTML={{
                    __html: project?.data.description,
                  }}
                />
                <div
                  className={`list-none flex items-center flex-wrap font-mono gap-3 rounded-lg text-sm ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  } mt-5`}
                >
                  {project.data.techstack.tech.map(
                    (tech: string, techIndex: number) => (
                      <li key={techIndex} style={{ wordSpacing: "-3px" }}>
                        {tech}
                      </li>
                    )
                  )}
                </div>
              </div>
            </MotionDiv>
          ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
