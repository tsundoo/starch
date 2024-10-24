import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div>
    <p className='p__cormorant' style={{ marginBottom: '1rem' }}>{title}</p>
    <img src={images.spoon} alt="spoon_image" className='spoon__img' />
  </div>
);

export default SubHeading; 