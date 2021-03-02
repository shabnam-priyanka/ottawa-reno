import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
    {
      original: 'https://i.imgur.com/s0zsG7h.jpg',
      thumbnail: 'https://i.imgur.com/s0zsG7h.jpg',
    },
    {
      original: 'https://i.imgur.com/0XrjB42.jpg',
      thumbnail: 'https://i.imgur.com/0XrjB42.jpg'
    },
    {
      original: 'https://i.imgur.com/iL5bsid.jpg',
      thumbnail: 'https://i.imgur.com/iL5bsid.jpg'
    },
    {
        original: 'https://i.imgur.com/YMQNLSr.jpg',
        thumbnail: 'https://i.imgur.com/YMQNLSr.jpg',
      },
      {
        original: 'https://i.imgur.com/MZ2rjsp.jpg',
        thumbnail: 'https://i.imgur.com/MZ2rjsp.jpg'
      },
      {
        original: 'https://i.imgur.com/xRalC1J.jpg',
        thumbnail: 'https://i.imgur.com/xRalC1J.jpg'
      },
      {
        original: 'https://i.imgur.com/TOChYKq.jpg',
        thumbnail: 'https://i.imgur.com/TOChYKq.jpg',
      },
      {
        original: 'https://i.imgur.com/ASOvx5l.jpg',
        thumbnail: 'https://i.imgur.com/ASOvx5l.jpg'
      },
      {
        original: 'https://i.imgur.com/CSVvsaz.jpg',
        thumbnail: 'https://i.imgur.com/CSVvsaz.jpg'
      },
      {
        original: 'https://i.imgur.com/2iSE2B3.jpg',
        thumbnail: 'https://i.imgur.com/2iSE2B3.jpg'
      }
  ]

const OurServices = () => {
    return (
        <div>
            <ImageGallery items={images} />
        </div>
    );
};

export default OurServices;