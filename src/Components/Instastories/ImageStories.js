import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import image1 from '../../assests/images/19305.jpg'
import image2 from '../../assests/images/2147896196.jpg'
import image3 from '../../assests/images/7807.jpg'

export default function ImagesStories() {
  const stories = [
    {
      type: 'image',
      url: image1,
      duration: 5000,
    },
    {
      type: 'image',
      duration: 6000,
      url: image2,
    },
    {
      duration: 7000,
      type: 'image',
      url: image3,
    },
  ];

  return (
    <>
    <div className='flex items-center justify-center h-screen'>
    <Stories
      width="400px"
      height="600px"
      stories={stories}
    />
    </div>
    </>
  );
}