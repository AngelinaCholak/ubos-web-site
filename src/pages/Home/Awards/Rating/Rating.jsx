import React, { useContext, useEffect, useRef } from 'react';
import css from './Rating.module.css';

import sprite from '../../../../assets/sprite.svg';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../../../src/components/LanguageSelector/translationsAwards.json';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Rating = () => {
  const AwardsRef = useRef(null);
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(AwardsRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: AwardsRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });
  }, []);
  return (
    <div className={css.title}>
      <h2 className={css.titleAwards} ref={AwardsRef}>
        {translations[selectedLanguage].titleAwards}
      </h2>
      <div className={css.place} ref={AwardsRef}>
        <div>
          <svg className={css.placeSvg}>
            <use href={sprite + '#place'}></use>
            <use className={css.number} href={sprite + '#number'}></use>
          </svg>
          <p className={css.placeText}>
            {translations[selectedLanguage].place}
          </p>
        </div>
        <div>
          <svg className={css.placeSvg}>
            <use href={sprite + '#place'}></use>
            <use className={css.number} href={sprite + '#number'}></use>
          </svg>
          <p className={css.placeText}>
            {translations[selectedLanguage].place}
          </p>
        </div>
        <div>
          <svg className={css.placeSvg}>
            <use href={sprite + '#place'}></use>
            <use className={css.number} href={sprite + '#number'}></use>
          </svg>
          <p className={css.placeText}>
            {translations[selectedLanguage].place}
          </p>
        </div>
        <div>
          <svg className={css.placeSvg}>
            <use href={sprite + '#place'}></use>
            <use className={css.number} href={sprite + '#number'}></use>
          </svg>
          <p className={css.placeText}>
            {translations[selectedLanguage].place}
          </p>
        </div>
        <div>
          <svg className={css.placeSvg}>
            <use href={sprite + '#place'}></use>
            <use className={css.number} href={sprite + '#number'}></use>
          </svg>
          <p className={css.placeText}>
            {translations[selectedLanguage].place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
