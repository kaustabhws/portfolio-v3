import AboutPage from "@/components/about/about";
import ContactPage from "@/components/contact/contact";
import FooterPage from "@/components/footer/footer";
import HomePage from "@/components/home/home";
import ProjectsPage from "@/components/projects/projects";
import SkillsPage from "@/components/skills/skills";

export default function Home() {
  return (
    <div>
      <div className="max-[325px]:px-2 px-7 min-[1100px]:w-[70%] mx-auto w-full">
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </div>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
}
