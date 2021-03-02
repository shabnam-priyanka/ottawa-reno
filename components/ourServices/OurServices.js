import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
    {
      original: 'https://cdn.pixabay.com/photo/2019/05/23/21/56/heath-the-bumble-bee-4224954__340.jpg',
      thumbnail: 'https://cdn.pixabay.com/photo/2019/05/23/21/56/heath-the-bumble-bee-4224954__340.jpg',
    },
    {
      original: 'https://cdn.pixabay.com/photo/2019/05/23/21/56/heath-the-bumble-bee-4224954__340.jpg',
      thumbnail: 'https://cdn.pixabay.com/photo/2019/05/23/21/56/heath-the-bumble-bee-4224954__340.jpg'
    },
    {
      original: 'https://cdn.pixabay.com/photo/2019/05/23/21/56/heath-the-bumble-bee-4224954__340.jpg',
      thumbnail: 'https://cdn.pixabay.com/photo/2019/05/23/21/56/heath-the-bumble-bee-4224954__340.jpg'
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