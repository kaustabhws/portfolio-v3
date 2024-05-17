"use client";

import DataFetcher from "@/utils/dataFetcher";
import { MotionDiv } from "@/utils/motion-div";
import { useInView } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const data: any = DataFetcher({ dataUrl: "about" });

  return (
    <div className="md:pt-14 pt-5" id="about">
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
          About
        </div>
        <span>
          <ArrowDownLeft
            size={50}
            className="max-[570px]:h-7 max-[570px]:w-7"
          />
        </span>
      </MotionDiv>
      <div className="flex items-center justify-between gap-20 pt-10 max-[830px]:flex-col max-[830px]:gap-10">
        <div className="flex-1 flex flex-col gap-10">
          <MotionDiv
            ref={ref2}
            initial={{ opacity: 0, y: 90 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
            transition={{
              duration: 1.0,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p>{data?.results[0].data.intro}</p>
          </MotionDiv>
          <MotionDiv
            ref={ref3}
            initial={{ opacity: 0, y: 90 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            dangerouslySetInnerHTML={{
              __html: data?.results[0].data.subintro,
            }}
          />
        </div>
        <MotionDiv
          ref={ref3}
          initial={{ opacity: 0, y: 90 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
          transition={{
            duration: 1.0,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex-1"
        >
          <Image
            className="photo"
            src={data?.results[0].data.photo || "/image.jpg"}
            alt="about"
            width={400}
            height={400}
            unoptimized
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default AboutPage;
