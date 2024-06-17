// src/components/Service.js
import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faTshirt, faShoePrints, faBook, faMobileAlt, faLaptop, faCamera } from '@fortawesome/free-solid-svg-icons';


const Service = () => {
  const items = [
    { icon: faShoppingBag, text: 'Bag' },
    { icon: faTshirt, text: 'Cloth' },
    { icon: faShoePrints, text: 'Shoe' },
    { icon: faBook, text: 'Book' },
    { icon: faMobileAlt, text: 'Phone' },
    { icon: faLaptop, text: 'Laptop' },
    { icon: faCamera, text: 'Camera' }
  ];
  return (
    <div className='container'>
    <div className="service">
      <div className="service-image">
        <img src={'https://images.unsplash.com/photo-1718039006696-b653fe660e3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'} />
      </div>
      <div className="service-text">
      {/* <ol> */}
        {items.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={item.icon} /> {item.text}
          </li>
        ))}
       {/* </ol> */}
    </div>
  </div>
    </div>
   
  );
};

export default Service;
