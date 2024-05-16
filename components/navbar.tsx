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
      className="fixed w-full backdrop-blur-sm bg-gradient-to-b from-black to-transparent pt-3"
    >
      <div className="relative flex h-16 items-center justify-between px-4 max-[272px]:px-1 lg:w-4/6 md:w-4/5 mx-auto max-[480px]:justify-center">
        <div className="hidden max-[480px]:block absolute left-2">
          <MobileNav />
        </div>
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="Kaustabh Logo"
              className="w-32"
            />
          </div>
        </Link>
        <div className="block max-[480px]:hidden">
          <MainNav className="ml-6 space-x-4 text-xl" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
