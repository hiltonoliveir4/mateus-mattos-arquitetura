import AboutMe from "@/app/components/aboutMe";
import Banner from "@/app/components/banner";
import Experience from "@/app/components/experience";
import ProjectsType from "@/app/components/projectsType";

export default function Index() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Experience />
      <ProjectsType />
    </div>
  );
}
