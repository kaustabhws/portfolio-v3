import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const FooterPage = () => {
  return (
    <div className="p-3 w-full">
      <div className='md:w-4/5 mx-auto flex justify-around items-center gap-2 bg-white h-20 text-black'>
        <Link href="https://github.com/kaustabhws" target="_blank">
          <div className="flex items-center gap-1 hover:border-b-2 transition p-2">
            <Github />
            <p className="text-lg">GitHub</p>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/kaustabh-mahanta-533748269" target="_blank">
          <div className="flex items-center gap-1 hover:border-b-2 transition p-2">
            <Linkedin />
            <p className="text-lg">LinkedIn</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterPage;
