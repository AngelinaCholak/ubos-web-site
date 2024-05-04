import React, { useContext, useEffect, useRef } from 'react';
import css from './OurSpecialty.module.css';
import sprite from '../../../assets/sprite.svg';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../components/LanguageSelector/translations.json';
import { NavLink } from 'react-router-dom';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



const OurSpecialty = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const ourSpecialtyRef = useRef(null);
  const titleSpecialtyRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleSpecialtyRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: titleSpecialtyRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });

    const OurSpecialtyBlok = document.querySelectorAll('.blok');
    OurSpecialtyBlok.forEach(blok => {
      gsap.fromTo(
        blok,
        { opacity: 1 },
        {
          y: -100,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: blok,
            start: 'center center',
            end: 'center top',
            scrub: 0.5,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

const menuItems = [
  {
    title: translations[selectedLanguage].InternetShops,
    route: 'internet-shops',
  },
  {
    title: translations[selectedLanguage].CorporativeWebsite,
    route: 'corporative-website',
  },
  { title: translations[selectedLanguage].LandingPage, route: 'landing-page' },
  { title: translations[selectedLanguage].TemplateWebsite, route: 'u-corp' },
  {
    title: translations[selectedLanguage].TemplateECommerce,
    route: 'u-commerce',
  },
  {
    title: translations[selectedLanguage].MobileApplications,
    route: 'mobile-applications',
  },
 
];

  return (
    <div className={css.container}>
      <h1 className={css.title} ref={titleSpecialtyRef}>
        {translations[selectedLanguage].OurSpecialty}
      </h1>
      <div className={css.specialtyBlok} ref={ourSpecialtyRef}>
        {menuItems.map((item, index) => (
          <div key={index} className={`${css.blok} blok`}>
            <div className={css.contentBlok}>
              <div>
                <h2 className={css.titleBlok}>{index + 1}/</h2>
                <nav>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.specialtyLink
                    }
                    to={item.route}
                  >
                    {item.title}
                  </NavLink>
                </nav>
              </div>
              <div>
                <svg className={css.arrow}>
                  <use href={sprite + '#arrow'}></use>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialty;
