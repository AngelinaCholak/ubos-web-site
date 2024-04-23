import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import css from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const { selectedLanguage, handleSelectLanguage } =
    useContext(LanguageContext);

  return (
    <div>
      <button
        className={
          selectedLanguage === "english"
            ? `${css.buttonLeng} ${css.active}`
            : css.buttonLeng
        }
        onClick={() => handleSelectLanguage("english")}
      >
        EN
      </button>
      <button
        className={
          selectedLanguage === "ukrainian"
            ? `${css.buttonLeng} ${css.active}`
            : css.buttonLeng
        }
        onClick={() => handleSelectLanguage("ukrainian")}
      >
        UA
      </button>
      <button
        className={
          selectedLanguage === "russian"
            ? `${css.buttonLeng} ${css.active}`
            : css.buttonLeng
        }
        onClick={() => handleSelectLanguage("russian")}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSelector;
