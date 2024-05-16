"use client";

import { ArrowDownRight } from "lucide-react";
import DatePage from "../date";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen pt-40 max-[325px]:px-2 px-7 min-[1100px]:w-[70%] mx-auto w-full">
      <div className="flex flex-col">
        <div className="font-ampersandbold max-[880px]:text-6xl max-[570px]:text-4xl text-8xl flex flex-col max-w-max">
          <motion.h1
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Hello,
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            I am Kaustabh
          </motion.p>
          <motion.div
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
          </motion.div>
        </div>
        <DatePage />
      </div>
    </div>
  );
};

export default HomePage;
