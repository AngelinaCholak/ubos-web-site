// import { LanguageContext } from "components/LanguageSelector/LanguageContext";
import React from "react";
// import translations from "../../../components/LanguageSelector/translations.json";
import css from "./Logo.module.css";
import sprite from "../../../assets/sprite.svg";

const Logo = () => {
  const handleTelegramClick = () => {
    window.open("https://telegram.org", "_blank");
  };
  const handleWhatsAppClick = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  //   const { selectedLanguage } = useContext(LanguageContext);
  return (
    <div className={css.container}>
      {/* <h1 className={css.logo}>{translations[selectedLanguage].logoText}</h1> */}
      <div>
        <svg className={css.logo}>
          <use href={sprite + "#logo"}></use>
        </svg>
      </div>

      <div className={css.social}>
        <svg onClick={handleTelegramClick}>
          <use href={sprite + "#telegram"}></use>
        </svg>
      </div>

      <div className={css.social}>
        <svg onClick={handleWhatsAppClick}>
          <use href={sprite + "#whatsapp"}></use>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
