import Image from "next/image";
import Link from "next/link";
import ChevronRigthIcon from "../icons/chevron";
import "./style.scss";

interface CardProps {
  image: string;
  title: string;
  className: string;
  description?: string;
  type: string;
  link?: string;
}

export default function Card({
  image,
  title,
  description,
  className,
  type,
  link,
}: CardProps) {
  return (
    <div className={`card ${className}`}>
      <Image
        className="image-card"
        src={image}
        width={480}
        height={480}
        alt={title}
        loading="lazy"
      />
      <div className="content-card">
        <div className="text-card">
          <h3 className="title-card">{title}</h3>
          {description && <p className="description-card">{description}</p>}
          <span className="type-card">{type}</span>
        </div>
        {link && (
          <Link className="btn-link" href={link}>
            <ChevronRigthIcon />
          </Link>
        )}
      </div>
    </div>
  );
}
