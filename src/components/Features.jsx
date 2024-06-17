import React from 'react';
// import { Col } from 'antd';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import './Features.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Features = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const featuresData = [
    {
      src: 'https://images.unsplash.com/photo-1718227696407-4de5de9c3599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
      title: 'Feature 1',
      rate: 4.5
    },
    {
      src: 'https://images.unsplash.com/photo-1718049048018-2ed7616db018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
      title: 'Feature 2',
      rate: 4.0
    },
    {
      src: 'https://images.unsplash.com/photo-1717942110740-80424da8eccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
      title: 'Feature 3',
      rate: 4.8
    },
    {
      src: 'https://images.unsplash.com/photo-1717942110740-80424da8eccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
      title: 'Feature 4',
      rate: 3.9
    }
  ];

  return (
    <Slider {...settings} className="features-container">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-item">
          <div>
            <img src={feature.src} alt={feature.title} />
            <p>{feature.title}</p>
            <p><FaStar /> {feature.rate}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Features;


// import React from 'react';
// import { Col } from 'antd';
// import Slider from 'react-slick';
// import { FaStar } from 'react-icons/fa';
// import './Features.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Features = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }
//   export default Features;

//   const featuresData = [
//     {
//       src: 'https://images.unsplash.com/photo-1718227696407-4de5de9c3599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Feature 1',
//       rate: 4
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1718049048018-2ed7616db018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Feature 2',
//       rate: 4
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1717942110740-80424da8eccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Feature 3',
//       rate: 5
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1717942110740-80424da8eccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Feature 4',
//       rate: 3
//     }
//   ];

//   const renderStars = (rate) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <FaStar key={i} color={i < rate ? 'gold' : 'gray'} />
//       );
//     }
//     return stars;
//   };

//   return (

//     <div className="features-slider">
//        <div > 
//           <h1>Our Services</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//     <Slider {...settings} className="features-container">
//       {featuresData.map((feature, index) => (
//         <div key={index} className="feature-item">
//           <div>
//           <div className="feature-box">
//             <img src={feature.src} alt={feature.title} />
//             <p>{feature.title}</p>
//             <p>{renderStars(feature.rate)}</p>
//           </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//     </div>
//   );
// };

// export default Features;
