import React from "react";
import style from "../header/style.module.css";
import { ReactComponent as Logo } from "../header/Logo.svg";
export default function Header() {
  return (
    <header>
      <a href="https://www.google.com/" className={style.logo}>
        <Logo />
      </a>
    </header>
  );
}
