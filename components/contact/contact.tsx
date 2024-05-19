"use client";

import { MotionDiv } from "@/utils/motion-div";
import { ArrowDownLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const ContactPage = () => {
  const ref = useRef(null);
  return (
    <div
      className="min-h-[80vh] mt-40 pt-20 uppercase flex items-center flex-col gap-20"
      id="contact"
      ref={ref}
    >
      <div className="font-ampersandbold text-8xl flex flex-col gap-10 max-[968px]:text-7xl max-[750px]:text-6xl max-[410px]:text-5xl max-[307px]:text-3xl transition-all max-[307px]:gap-5">
        <div className="flex max-[450px]:flex-col max-[450px]:gap-10 max-[307px]:gap-5">
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.0,
              delay: 0.07,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Interested&nbsp;
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.0,
              delay: 0.07,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            in&nbsp;
          </MotionDiv>
        </div>
        <div className="flex max-[620px]:flex-col max-[620px]:gap-10 max-[307px]:gap-5">
          <MotionDiv
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.0,
              delay: 0.07,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Working&nbsp;
          </MotionDiv>
          <div className="flex">
            <MotionDiv
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.07,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              with&nbsp;
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.07,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              me?
            </MotionDiv>
          </div>
        </div>
        <Link href="mailto:kaustabhworkspace@gmail.com">
          <div className="flex items-end border-b-4 pb-5 cursor-pointer hover:border-b-white transition-all max-w-full md:w-max">
            <MotionDiv
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.07,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="pr-2"
            >
              Let&apos;s Talk
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.0,
                delay: 0.07,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <ArrowDownLeft
                size={50}
                className="max-[570px]:h-7 max-[570px]:w-7"
              />
            </MotionDiv>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
