import React, { useContext, useEffect, useRef, useState } from 'react';
import Logo from './Logo/Logo';
import css from './Header.module.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import translations from '../../../src/components/LanguageSelector/translations.json';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Header = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headerRef.current,
      {
        y: 0,
      },
      {
        y: -200,
        duration: 0.3,
        ease: 'power4.elastic', // Функція плавності анімації
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          toggleActions: 'play none none none',
          onEnter: () => {
            setIsHeaderVisible(true);
          },
          onEnterBack: () => {
            setIsHeaderVisible(true);
          },
        },
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 200
      ) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <>
      <header
        className={css.container}
        ref={headerRef}
        style={{
          transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.6s ease',
        }}
      >
        <div className={css.headerContainer}>
          <Logo />
          <div className={css.containerRight}>
            <LanguageSelector />
            <div className={css.navContainer}>
              <nav>
                <ul className={css.listMenu}>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? css.active : css.headerLink
                      }
                      to="/"
                    >
                      {translations[selectedLanguage].layoutHome}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? css.active : css.headerLink
                      }
                      to="portfolio"
                    >
                      {translations[selectedLanguage].layoutPortfolio}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? css.active : css.headerLink
                      }
                      to="aboutus"
                    >
                      {translations[selectedLanguage].layoutAboutUs}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? css.active : css.headerLink
                      }
                      to="contacts"
                    >
                      {translations[selectedLanguage].layoutContacts}
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className={css.header}></div>
      </header>
    </>
  );
};

export default Header;
