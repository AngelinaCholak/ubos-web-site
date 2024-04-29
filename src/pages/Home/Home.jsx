import React, { useContext, useEffect, useRef } from 'react';
import css from './Home.module.css';
import image from '../../assets/img/hero2.png';
import mainLeft from '../../assets/img/mainLeft.png';
import mainRight from '../../assets/img/mainRight.png';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../src/components/LanguageSelector/translations.json';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Home = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const containerRef = useRef(null);
  
  const titleHomRef = useRef(null);
  const imageRef = useRef(null);

  const containerHomeRef = useRef(null);
  const portfolioRef = useRef(null);
  const galleryItem = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Анімація для приховування containerHomeRef
    gsap.to(imageRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        toggleActions: 'play none none none',
      },
    });
    // Анімація для приховування titleHomRef
    gsap.to(titleHomRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: titleHomRef.current,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play none none none',
      },
    });

    // Анімація для всіх елементів .galleryItem
    const galleryItems = document.querySelectorAll('.galleryItem');
    galleryItems.forEach(item => {
      gsap.fromTo(
        item,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'center center',
            end: 'center top',
            scrub: 0.1,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className={css.container} ref={containerRef}>
      <div className={css.containerHome} ref={containerHomeRef}>
        <img className={css.image} ref={imageRef} src={image} alt={image} />
        <h1 className={css.titleHom} ref={titleHomRef}>
          {translations[selectedLanguage].alwaysAroundMessage}
        </h1>
      </div>
      <div className={css.portfolio} ref={portfolioRef}>
        <div className={css.containerPortfolio}>
          <div className={css.gallery}>
            <div className={css.galleryLeft}>
              <img
                className={`${css.galleryItem} galleryItem`}
                src={mainLeft}
                alt={mainLeft}
              />
              <img
                className={`${css.galleryItem} galleryItem`}
                src={mainRight}
                alt={mainRight}
              />

              <div className={`${css.textBlok} ${css.galleryItem} galleryItem`}>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima ratione velit accusamus animi, natus molestiae labore
                  perspiciatis cum esse a deleniti quasi dolorem repellendus
                  quaerat nemo enim harum facere vero.
                </h2>
              </div>
              <img
                className={`${css.galleryItem} galleryItem`}
                ref={galleryItem}
                src={mainLeft}
                alt={mainLeft}
              />
            </div>
            <div className={css.galleryRight}>
              <div className={`${css.textBlok} ${css.galleryItem} galleryItem`}>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima ratione velit accusamus animi, natus molestiae labore
                  perspiciatis cum esse a deleniti quasi dolorem repellendus
                  quaerat nemo enim harum facere vero.
                </h2>
              </div>
              <img
                className={`${css.galleryItem} galleryItem`}
                src={mainLeft}
                alt={mainLeft}
              />
              <img
                className={`${css.galleryItem} galleryItem`}
                src={mainLeft}
                alt={mainLeft}
              />
              <img
                className={`${css.galleryItem} galleryItem`}
                src={mainLeft}
                alt={mainLeft}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
