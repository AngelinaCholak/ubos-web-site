import React from 'react'
import sprite from '../../assets/sprite.svg';
import css from './Footer.module.css';

const Footer = () => {
  const handleTelegramClick = () => {
    window.open("https://telegram.org", "_blank");
  };
  const handleWhatsAppClick = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };
    return (
      <div className={css.container}>
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