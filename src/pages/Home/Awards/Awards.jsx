import React, { useContext } from 'react'
import css from './Awards.module.css';
import sprite from '../../../assets/sprite.svg';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../../src/components/LanguageSelector/translationsAwards.json';

const Awards = () => {
      const { selectedLanguage } = useContext(LanguageContext);
  return (
    <section className={css.container}>
      <div className={css.title}>
        <h2 className={css.titleAwards}>
          {translations[selectedLanguage].titleAwards}
        </h2>
        <div className={css.place}>
          <svg className={css.placeSvg}>
            <use href={sprite + '#place'}></use>
            <use className={css.number} href={sprite + '#number'}></use>
          </svg>
          <p className={css.placeText}>
            {translations[selectedLanguage].place}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Awards;