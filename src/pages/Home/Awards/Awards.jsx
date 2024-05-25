import React from 'react'
import css from './Awards.module.css';

import OurAwards from './OurAwards/OurAwards';
import Approach from './Approach/Approach';
import Rating from './Rating/Rating';



const Awards = () => {
  return (
    <section className={css.container}>
      <Rating/>
      <OurAwards />
      <Approach />
    </section>
  );
}

export default Awards;