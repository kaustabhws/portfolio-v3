"use client";

import DataFetcher from "@/utils/dataFetcher";
import { MotionDiv } from "@/utils/motion-div";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SkillsPage = () => {
  const ref = useRef(null);

  const data: any = DataFetcher({ dataUrl: "techn" });

  return (
    <div className="md:pt-14 pt-9" ref={ref}>
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
        className="flex items-end gap-2 justify-end"
      >
        <div className="max-[880px]:text-6xl max-[570px]:text-4xl text-7xl font-ampersandlight uppercase">
          Skills
        </div>
        <span>
          <ArrowDownLeft
            size={50}
            className="max-[570px]:h-7 max-[570px]:w-7"
          />
        </span>
      </MotionDiv>
      <div className="flex items-center justify-center gap-6 flex-wrap my-10 md:w-[75%] mx-auto">
        {data?.results.map((tech: any, index: any) => (
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.0,
              delay: index * 0.06,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={index}
            className="border p-3 rounded-lg"
          >
            <Image
              src={tech.data.tech}
              alt={`${tech.name} logo`}
              width={120}
              height={120}
              unoptimized
              className="w-auto h-16 aspect-auto"
            />
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
