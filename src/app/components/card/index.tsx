"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar se o elemento está visível na tela
  function isElementInViewport(el: Element | null): boolean {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const handleScroll = useCallback(() => {
    const imagem = document.querySelector(".card");

    if (isElementInViewport(imagem)) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`card ${className}`}>
      <Image
        className={`image-card ${isVisible ? "animation" : ""}`}
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
