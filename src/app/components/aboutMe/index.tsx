import AboutMeData from "@/app/constants/aboutMeData";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

export default function AboutMe() {
  const data = AboutMeData();
  return (
    <div className="about-me">
      <div className="about-me-container">
        <div className="about-me-text">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <Link href={`mailto: ${data.email}`} target="_blank">
          Fale comigo
        </Link>
      </div>
      <Image src={data.image} alt={data.name} width={500} height={500}></Image>
    </div>
  );
}
