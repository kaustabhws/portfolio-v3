import { ArrowDownRight } from "lucide-react";
import DatePage from "../date";

const HomePage = () => {
  return (
    <div className="min-h-screen pt-40 max-[325px]:px-2 px-7 min-[1100px]:w-[70%] mx-auto w-full">
      <div className="flex flex-col">
        <div className="font-ampersandbold max-[880px]:text-6xl max-[570px]:text-4xl text-8xl flex flex-col max-w-max">
            <h1>Hello,</h1>
            <p>I am Kaustabh</p>
          <div className="max-[570px]:text-sm text-xl flex items-center gap-1 self-end">
            <ArrowDownRight />
            <p>Full Stack Developer</p>
          </div>
        </div>
        <DatePage />
      </div>
    </div>
  );
};

export default HomePage;
