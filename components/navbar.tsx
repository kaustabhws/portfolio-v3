"use client";

import { useState } from "react";
import { MainNav } from "./main-nav";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 90) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed z-50 w-full backdrop-blur-sm bg-gradient-to-b from-black to-transparent pt-3"
    >
      <div className="relative flex h-16 items-center justify-between px-4 max-[272px]:px-1 lg:w-4/6 md:w-4/5 mx-auto max-[480px]:justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="hidden max-[480px]:block absolute left-2"
        >
          <MobileNav />
        </motion.div>
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center justify-center"
          >
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="Kaustabh Logo"
              className="w-32"
            />
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="block max-[480px]:hidden"
        >
          <MainNav className="ml-6 space-x-4 text-xl" />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
