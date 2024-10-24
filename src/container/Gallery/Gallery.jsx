import React, { useEffect, useRef } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.food1, images.food2, images.food3, images.food4, images.food5];

const Gallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>rejoignez nous sur instagram</p>
        <a href="https://www.instagram.com/westafriica/">
        <button type='button' className='custom__button'>Follow Instagram</button>
        </a>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
