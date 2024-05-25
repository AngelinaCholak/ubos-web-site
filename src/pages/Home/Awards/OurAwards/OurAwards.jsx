import React, { useContext, useState, useEffect, useRef } from 'react';
import css from './OurAwards.module.css';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../../../src/components/LanguageSelector/translationsAwards.json';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const certificates = [
  {
    src: require('../../../../assets/img/CertificateCholak1.JPG'),
    alt: 'Award 1',
  },
  {
    src: require('../../../../assets/img/CertificateCholak.jpg'),
    alt: 'Award 2',
  },
  {
    src: require('../../../../assets/img/CertificateCholak.jpg'),
    alt: 'Award 2',
  },
];

const OurAwards = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { selectedLanguage } = useContext(LanguageContext);
  const [isLampOn, setIsLampOn] = useState(false);
  const [showAwardsBlock, setShowAwardsBlock] = useState(false);
  const lampRef = useRef(null);
  const awardsBlockRef = useRef(null);
  const awardsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (lampRef.current && !lampRef.current.contains(event.target)) {
        setIsLampOn(false);
        setShowAwardsBlock(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showAwardsBlock) {
      gsap.to(awardsBlockRef.current, {
        opacity: 1,
        duration: 0.5,
        transition: 0.5,
      });
    } else {
      gsap.to(awardsBlockRef.current, {
        opacity: 0.15,
        duration: 0,
        transition: 0,
      });
    }
  }, [showAwardsBlock]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(awardsRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: awardsRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });
  }, []);


  const handleLampClick = () => {
    setIsLampOn(prevState => !prevState);
    setShowAwardsBlock(prevState => !prevState);
  };

  const handleAwardsBlockClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={css.awards}>
      <div className={css.ourAwards}>
        <h2 className={css.titleAwards} ref={awardsRef}>
          {translations[selectedLanguage].awards}
        </h2>
        <div className={css.blokLamp}>
          <div
            className={`${css.lamp} ${isLampOn ? '' : css.bouncing}`}
            ref={lampRef}
            onClick={handleLampClick}
          >
            <div className={`${css.light} ${isLampOn ? css.lampOn : ''}`}></div>
          </div>
        </div>
      </div>
      <div
        className={css.imageBlok}
        ref={awardsBlockRef}
        onClick={handleAwardsBlockClick}
      >
        {certificates.map((item, index) => (
          <div key={index}>
            <img
              className={css.certificate1}
              width={320}
              height={400}
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAwards;
