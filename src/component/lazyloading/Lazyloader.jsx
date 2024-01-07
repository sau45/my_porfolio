import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Lazyloader = ({ src,alt,title}) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src}
    title={title}
     />
    
);

export default Lazyloader