"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../icons/logo";
import MenuIcon from "../icons/menu";
import "./style.scss";

export default function Header() {
  const [openedMenu, setOpenedMenuAberto] = useState(false);

  const toggleMenu = () => {
    setOpenedMenuAberto(!openedMenu);
  };

  return (
    <div className="header">
      <Logo />
      <nav className={openedMenu ? "opened-menu" : ""}>
        <Link href={"/"}> Início </Link>
        <Link href={"/"}> Projetos </Link>
        <Link href={"/"}> Currículo </Link>
        <Link href={"/"}> Contatos </Link>
      </nav>
      <button className="menu-button" onClick={toggleMenu}>
        <MenuIcon />
      </button>
    </div>
  );
}
