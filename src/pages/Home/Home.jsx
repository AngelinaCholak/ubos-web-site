import React, { useContext, useEffect, useRef } from 'react';
import css from './Home.module.css';
import image from '../../assets/img/hero2.png';
import mainLeft from '../../assets/img/mainLeft.png';
import mainRight from '../../assets/img/mainRight.png';
import { LanguageContext } from 'components/LanguageSelector/LanguageContext';
import translations from '../../../src/components/LanguageSelector/translations.json';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import OurSpecialty from './ OurSpecialty/OurSpecialty';
import ButtonDiscuss from './ButtonDiscuss/ButtonDiscuss';
import AnimationShow from './AnimationShow/AnimationShow';
import Awards from './Awards/Awards';

const Home = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  
  const titleHomRef = useRef(null);
  const imageRef = useRef(null);
  const galleryItem = useRef(null);
  const galleryLeftRef = useRef(null);
  const galleryRightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 4,
        toggleActions: 'play none none none',
      },
    });

    //приховування titleHomRef
    gsap.to(titleHomRef.current, {
      opacity: 0,
      // x: -500,
      y: -100,
      scrollTrigger: {
        trigger: titleHomRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });

    // Анімація для  .galleryItem
    const galleryItems = document.querySelectorAll('.galleryItem');
    galleryItems.forEach(item => {
      gsap.fromTo(
        item,
        { opacity: 1 },
        {

          y: -100,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'center center',
            end: 'center top',
            scrub: 0.5,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    //  const galleryLeftItems =
    //    galleryLeftRef.current.querySelectorAll('.galleryItem');
    //  galleryLeftItems.forEach(item => {
    //    gsap.fromTo(
    //      item,
    //      { opacity: 0, x: -100 },
    //      {
    //        x: 0,
    //        y: -100,
    //        opacity: 1,
    //        duration: 0.5,
    //        scrollTrigger: {
    //          trigger: item,
    //          start: 'center center',
    //          end: 'center top',
    //          scrub: 0.5,
    //          toggleActions: 'play none none none',
    //        },
    //      }
    //    );
    //  }, []);
    
    //      const galleryRight =
    //        galleryRightRef.current.querySelectorAll('.galleryItem');
    //      galleryRight.forEach(item => {
    //        gsap.fromTo(
    //          item,
    //          { opacity: 0, x: 100 },
    //          {
    //            x: 0,
    //             y: -100,
    //            opacity: 1,
    //            duration: 0.5,
    //            scrollTrigger: {
    //              trigger: item,
    //              start: 'center center',
    //              end: 'center top',
    //              scrub: 0.5,
    //              toggleActions: 'play none none none',
    //            },
    //          }
    //        );
    //      }, []);
    
    
  }, []);

  return (
    <>
      <section className={css.container}>
        <div className={css.containerHome}>
          <img className={css.image} ref={imageRef} src={image} alt={image} />
          <div className={css.titleButtonBlok}>
            <h1 className={css.titleHom} ref={titleHomRef}>
              {translations[selectedLanguage].alwaysAroundMessage}
            </h1>
            <ButtonDiscuss />
          </div>
        </div>
        <div className={css.portfolio}>
          <div className={css.containerPortfolio}>
            <div className={css.gallery}>
              <div className={css.galleryLeftBlok}>
                <div className={css.galleryLeft} ref={galleryLeftRef}>
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

                  <div
                    className={`${css.textBlok} ${css.galleryItem} galleryItem`}
                  >
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima ratione velit accusamus animi, natus molestiae
                      labore perspiciatis cum esse a deleniti quasi dolorem
                      repellendus quaerat nemo enim harum facere vero.
                    </h2>
                  </div>
                  <img
                    className={`${css.galleryItem} galleryItem`}
                    ref={galleryItem}
                    src={mainLeft}
                    alt={mainLeft}
                  />
                </div>
              </div>

              <div className={css.galleryRight} ref={galleryRightRef}>
                <div
                  className={`${css.textBlok} ${css.galleryItem} galleryItem`}
                >
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
        <OurSpecialty />
        <AnimationShow />
        <Awards/>
      </section>
    </>
  );
};

export default Home;
