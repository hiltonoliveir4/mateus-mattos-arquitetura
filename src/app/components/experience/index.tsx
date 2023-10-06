import experiencesData from "@/app/constants/experiencesData";
import ExperienceCard from "../experienceCard";
import "./style.scss";

export default function Experience() {
  const experienceList = experiencesData();
  return (
    <div className="experience">
      <h2> Minhas Experiências </h2>
      <div className="experiences-container">
        {experienceList.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            image={experience.image}
            time={experience.time}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
}
