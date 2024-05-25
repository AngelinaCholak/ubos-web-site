import React, { useEffect, useRef } from 'react'
import css from './AnimationShow.module.css';
import image from '../../../assets/img/AnimationShow1.png';
import image1 from '../../../assets/img/AnimationShow2.png';
import image2 from '../../../assets/img/AnimationShow3.png';
import image3 from '../../../assets/img/AnimationShow4.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AnimationShow = () => {
  gsap.registerPlugin(ScrollTrigger);

  const AnimationShowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(AnimationShowRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: AnimationShowRef.current,
        start: 'center center',
        end: 'bottom ',
        scrub: 0.5,
        toggleActions: 'play none none none',
      },
    });


  }, []);

    return (
      <div className={css.containerShow}>
        <div className={css.container} ref={AnimationShowRef}>
          <div className={css.cube}>
            <img className={css.cubeImg} src={image} alt={image} />
            <img className={css.cubeImg} src={image1} alt={image} />
            <img className={css.cubeImg} src={image2} alt={image} />
            <img className={css.cubeImg} src={image3} alt={image} />
          </div>
        </div>
      </div>
    );
}

export default AnimationShow