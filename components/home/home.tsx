"use client";

import { ArrowDown, ArrowDownRight } from "lucide-react";
import DatePage from "../date";
import { motion } from "framer-motion";
import { MotionDiv } from "@/utils/motion-div";

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

const HomePage = () => {
  return (
    <div className="min-h-screen pt-40">
      <div className="flex flex-col">
        <div className="font-ampersandbold max-[880px]:text-6xl max-[570px]:text-4xl text-8xl flex flex-col max-w-max">
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Hello,
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            I am Kaustabh
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="max-[570px]:text-sm text-xl flex items-center gap-1 self-end"
          >
            <ArrowDownRight />
            <p>Full Stack Developer</p>
          </MotionDiv>
        </div>
        <div className="flex justify-between max-[430px]:flex-col-reverse max-[430px]:items-center max-[430px]:gap-6">
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="min-[430px]:self-end cursor-pointer"
            onClick={scrollDown}
          >
            <ArrowDown size={50} />
          </MotionDiv>
          <DatePage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
