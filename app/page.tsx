import AboutPage from "@/components/about/about";
import HomePage from "@/components/home/home";
import SkillsPage from "@/components/skills/skills";

export default function Home() {
  return (
    <div className="max-[325px]:px-2 px-7 min-[1100px]:w-[70%] mx-auto w-full">
      <HomePage />
      <AboutPage />
      <SkillsPage />
    </div>
  );
}
