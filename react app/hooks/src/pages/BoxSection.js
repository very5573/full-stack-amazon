import React from 'react';
import './boxSection.css';

const boxData = [
  {
    title: 'Clothes',
    image: require('../assets/box/box1_image.jpg'),
    link: 'https://www.amazon.in/.../clothes-link'
  },
  {
    title: 'Health & Personal Care',
    image: require('../assets/box/box2_image.jpg'),
    link: 'https://www.amazon.in/.../health-link'
  },
  {
    title: 'Furniture',
    image: require('../assets/box/box3_image.jpg'),
    link: 'https://www.amazon.in/.../furniture-link'
  },
  {
    title: 'Electronics',
    image: require('../assets/box/box4_image.jpg'),
    link: 'https://www.amazon.in/.../electronics-link'
  },
  {
    title: 'Beauty Picks',
    image: require('../assets/box/box5_image.jpg'),
    link: 'https://www.amazon.in/.../beauty-link'
  },
  {
    title: 'Pet Care',
    image: require('../assets/box/box6_image.jpg'),
    link: 'https://www.amazon.in/.../pet-link'
  },
  {
    title: 'New Toys',
    image: require('../assets/box/box7_image.jpg'),
    link: 'https://www.amazon.in/.../toys-link'
  },
  {
    title: 'Fashion Trends',
    image: require('../assets/box/box8_image.jpg'),
    link: 'https://www.amazon.in/.../fashion-link'
  }
];

const BoxSection = () => {
  return (
    <div className="shop-section">
      {boxData.map((box, index) => (
        <div className="box" key={index}>
          <div className="box-content">
            <a href={box.link} target="_blank" rel="noopener noreferrer">{box.title}</a>
            <div className="box-img" style={{ backgroundImage: `url(${box.image})` }}></div>
            <p>See more</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxSection;
