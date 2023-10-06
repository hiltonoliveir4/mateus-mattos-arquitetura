import Link from "next/link";
import Logo from "../icons/logo";
import "./style.scss";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <nav>
        <Link href={"/"}> Início </Link>
        <Link href={"/"}> Projetos </Link>
        <Link href={"/"}> Currículo </Link>
        <Link href={"/"}> Contatos </Link>
      </nav>
    </div>
  );
}
