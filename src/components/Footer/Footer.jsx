import React, { useContext } from 'react'
import sprite from '../../assets/sprite.svg';
import css from './Footer.module.css';

import translations from '../../../src/components/LanguageSelector/translations.json';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';

const Footer = () => {
    const { selectedLanguage } = useContext(LanguageContext);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  const handleTelegramClick = () => {
    window.open("https://telegram.org", "_blank");
  };
  const handleWhatsAppClick = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };
    return (
      <div className={css.container}>
        <div className={css.scrollToTopButton} onClick={scrollToTop}>
          <svg className={css.buttonTop}>
            <use href={sprite + '#buttontop'}></use>
          </svg>
          {translations[selectedLanguage].ButtonTop}
        </div>
        <div className={css.social}>
          <svg onClick={handleTelegramClick}>
            <use href={sprite + '#telegram'}></use>
          </svg>
        </div>

        <div className={css.social}>
          <svg onClick={handleWhatsAppClick}>
            <use href={sprite + '#whatsapp'}></use>
          </svg>
        </div>
      </div>
    );
}

export default Footer