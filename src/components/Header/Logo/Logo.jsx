// import { LanguageContext } from "components/LanguageSelector/LanguageContext";
import React from "react";
// import translations from "../../../components/LanguageSelector/translations.json";
import css from "./Logo.module.css";
import sprite from "../../../assets/sprite.svg";
import { useNavigate } from "react-router-dom";


const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  //   const { selectedLanguage } = useContext(LanguageContext);
  return (
    <div className={css.container} onClick={handleClick}>
      {/* <h1 className={css.logo}>{translations[selectedLanguage].logoText}</h1> */}
      
        <svg className={css.logo}>
          <use href={sprite + '#logo1'}></use>
        </svg>
     
    </div>
  );
};

export default Logo;
