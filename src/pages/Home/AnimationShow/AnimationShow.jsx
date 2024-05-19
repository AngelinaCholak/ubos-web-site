import React from 'react'
import css from './AnimationShow.module.css';
import image from '../../../assets/img/mainLeft.png';
import image1 from '../../../assets/img/mainRight.png';
import image2 from '../../../assets/img/fone3.jpg';
import image3 from '../../../assets/img/fone2.jpg';

const AnimationShow = () => {
    return (
      <div className={css.containerShow}>
        <div className={css.container}>
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