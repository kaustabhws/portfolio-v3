"use client";

import DataFetcher from "@/utils/dataFetcher";
import { MotionDiv } from "@/utils/motion-div";
import { ArrowDownLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import VideoModal from "../video-modal";

const ProjectsPage = () => {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const data: any = DataFetcher({ dataUrl: "projects" });

  const handleWatchVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <div className="md:pt-14 pt-5 mb-10 select-none" id="projects" ref={ref}>
      <MotionDiv
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
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
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={`flex items-center gap-10 max-[885px]:flex-col 
              ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              key={index}
            >
              <div className="relative flex-[0.9] group">
                <Image
                  src={project.data.thumbnail}
                  alt={project.data.name}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-[4px]"
                />
                <button
                  onClick={() => handleWatchVideo(project.data.video)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white p-2 rounded-md"
                >
                  Watch Video
                </button>
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
                <div
                  className={`flex items-center gap-10 mt-5 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <Link href={project.data.live} target="_blank">
                    <p className="flex items-center gap-2 cursor-pointer">
                      Live Demo{" "}
                      <span>
                        <ExternalLink size={18} />
                      </span>
                    </p>
                  </Link>
                  <Link href={project.data.source} target="_blank">
                    <p className="flex items-center gap-2 cursor-pointer">
                      GitHub{" "}
                      <span>
                        <Github size={18} />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
      </div>
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={currentVideo} />
    </div>
  );
};

export default ProjectsPage;
