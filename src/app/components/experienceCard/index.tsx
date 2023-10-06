import Image from "next/image";
import "./style.scss";

interface experienceCardProps {
  company: string;
  description: string;
  image: string;
  time: string;
}
export default function experienceCard({
  image,
  company,
  time,
  description,
}: experienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-card-container">
        <Image src={image} alt={company} width={50} height={50} />
        <div>
          <h4>{company}</h4>
          <span>{time}</span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
