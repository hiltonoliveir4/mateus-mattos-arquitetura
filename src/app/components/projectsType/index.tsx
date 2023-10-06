import Card from "../card";
import "./style.scss";

export default function ProjectsType() {
  const projectsType = ["Interiores", "Comercial", "Residencial"];
  return (
    <div className="projects-type-container">
      <h2> Meus Projetos </h2>
      {projectsType.map((type, index) => (
        <Card
          key={index}
          className={`border-${((index + 4) % 4) + 1}`}
          image="/images/card.png"
          title="Interiores"
          description="Veja mais"
          link="/"
          type={type}
        />
      ))}
    </div>
  );
}
