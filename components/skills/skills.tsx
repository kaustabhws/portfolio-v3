"use client";

import DataFetcher from "@/utils/dataFetcher";
import { MotionDiv } from "@/utils/motion-div";
import { useInView } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SkillsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const data: any = DataFetcher({ dataUrl: "techn" });

  return (
    <div className="md:pt-14">
      <MotionDiv
        ref={ref}
        initial={{ opacity: 0, y: 90 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
        transition={{
          duration: 1.0,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex items-end gap-2"
      >
        <div className="max-[880px]:text-6xl max-[570px]:text-4xl text-7xl font-ampersandlight uppercase">
          Skills
        </div>
        <span>
          <ArrowDownLeft size={50} />
        </span>
      </MotionDiv>
      <div className="flex items-center justify-center gap-6 flex-wrap my-10 md:w-[75%] mx-auto">
        {data?.results.map((tech: any, index: any) => (
          <MotionDiv
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
              className="w-16 h-16"
            />
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
