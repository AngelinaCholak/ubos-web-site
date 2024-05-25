import React, { useContext, useEffect, useRef } from 'react';
import css from './Approach.module.css';
import sprite from '../../../../assets/sprite.svg';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../../../src/components/LanguageSelector/translationsAwards.json';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Approach = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const approachLiRefs = useRef([]);
  const approachUlRef = useRef(null);
  const ApproachRef = useRef(null);
   const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ApproachRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: ApproachRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });
  }, []);
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(imgRef.current, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'center center',
            end: 'bottom ',
            scrub: 0.5,
            toggleActions: 'play none none none',
          },
        });
      }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const listItems = approachLiRefs.current;
            gsap.from(listItems[0], {
              x: '-=1000',
              opacity: 0,
              duration: 1,
              delay: 0.5,
            });
            gsap.from(listItems[1], {
              x: '-=1000',
              opacity: 0,
              duration: 1,
              delay: 0.5,
            });
            gsap.from(listItems[2], {
              x: '+=1000',
              opacity: 0,
              duration: 1,
              delay: 1,
            });
            gsap.from(listItems[3], {
              x: '+=1000',
              opacity: 0,
              duration: 1,
              delay: 1,
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (approachUlRef.current) {
      observer.observe(approachUlRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.titleAwards} ref={ApproachRef}>
        {translations[selectedLanguage].approach}
      </h2>
      <div ref={imgRef}>
        <ul ref={approachUlRef} className={css.rightList}>
          <li
            ref={el => (approachLiRefs.current[0] = el)}
            className={css.approachLi}
          >
            <svg className={css.vector}>
              <use href={sprite + '#vectorhand'}></use>
            </svg>
            <p className={css.text}>
              {translations[selectedLanguage].approach1}
            </p>
          </li>
          <li
            ref={el => (approachLiRefs.current[1] = el)}
            className={css.approachLi}
          >
            <svg className={css.vector}>
              <use href={sprite + '#vectorup'}></use>
            </svg>
            <p className={css.text}>
              {translations[selectedLanguage].approach2}
            </p>
          </li>
          <li
            ref={el => (approachLiRefs.current[2] = el)}
            className={css.approachLi}
          >
            <svg className={css.vector}>
              <use href={sprite + '#vectorupclock'}></use>
            </svg>
            <p className={css.text}>
              {translations[selectedLanguage].approach3}
            </p>
          </li>
          <li
            ref={el => (approachLiRefs.current[3] = el)}
            className={css.approachLi}
          >
            <svg className={css.vector}>
              <use href={sprite + '#idea'}></use>
            </svg>
            <p className={css.text}>
              {translations[selectedLanguage].approach4}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Approach;
