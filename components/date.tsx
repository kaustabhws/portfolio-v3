"use client";

import { format } from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";

const DatePage = () => {
  const date = new Date();

  const [show, setShow] = useState(false);

  return (
    <div
      className="md:self-end self-center md:mt-10 mt-20 cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="md:w-72 md:h-72 border hover:border-gray-500 transition-all rounded-full relative h-64 w-64 max-[268px]:w-52 max-[268px]:h-52 flex justify-center items-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute -z-10 -top-6 right-14 m-2 px-2 text-4xl md:text-5xl bg-black max-[268px]:text-3xl"
          >
            {format(date, "MMMM")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute -z-10 top-8 -right-5 m-2 px-2 text-6xl md:text-7xl bg-black max-[268px]:text-4xl"
          >
            {format(date, "dd")}
          </motion.div>
          <div className="text-center text-xl md:text-2xl">
            {!show ? (
              <motion.p
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{
                  duration: 1.0,
                  delay: 0.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                About me
              </motion.p>
            ) : (
              <div className="text-sm px-5 pt-2 w-48">
                Hi there! My name is Kaustabh, and I am a full stack web
                developer. I enjoy creating stuff with code and learning about
                new things related to programming.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DatePage;
