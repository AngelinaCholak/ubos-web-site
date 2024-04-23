import React from "react";
import Logo from "./Logo/Logo";
import css from "./Header.module.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";


const Header = () => {
  return (
    <>
      <div className={css.container}>
        <Logo />
        <LanguageSelector />
      </div>
      <div className={css.header}></div>
    </>
  );
};

export default Header;
