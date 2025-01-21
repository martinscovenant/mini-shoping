// import React from 'react';
// import './Feedback.css';
// import { FaThumbsUp } from 'react-icons/fa';

// const Feedback = () => {
//   const feedbackData = [
//     {
//       id: 1,
//       message: "Great service, highly recommended!",
//     },
//     {
//       id: 2,
//       message: "Very satisfied with the product quality.",
//     },
//     {
//       id: 3,
//       message: "Excellent customer support.",
//     },
//     {
//       id: 4,
//       message: "Fast delivery and great packaging.",
//     },
//     {
//       id: 5,
//       message: "Will definitely purchase again.",
//     },
//     {
//       id: 6,
//       message: "User-friendly website and smooth transaction.",
//     }
//   ];

//   return (
//     <div className="feedback-container">
//       {feedbackData.map(feedback => (
//         <div key={feedback.id} className="feedback-item">
//           <div className="feedback-icon">
//             <FaThumbsUp />
//           </div>
//           <p>{feedback.message}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feedback;

import React from 'react';
import './Feedback.css';

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      message: "Great service, highly recommended!",
      image: "path/to/your/image1.jpg",
    },
    {
      id: 2,
      message: "Very satisfied with the product quality.",
      image: "path/to/your/image2.jpg",
    },
    {
      id: 3,
      message: "Excellent customer support.",
      image: "path/to/your/image3.jpg",
    },
    {
      id: 4,
      message: "Fast delivery and great packaging.",
      image: "path/to/your/image4.jpg",
    },
    {
      id: 5,
      message: "Will definitely purchase again.",
      image: "path/to/your/image5.jpg",
    },
    {
      id: 6,
      message: "User-friendly website and smooth transaction.",
      image: "path/to/your/image6.jpg",
    }
  ];

  return (
    <div className='text'>
      <div className="feedback-header">
        <h1>Our Services</h1>
        <p>**Why You Should Choose Our Products**  

At [Your Shopping Site’s Name], we prioritize quality, value, and customer satisfaction above all else. Our products are carefully curated to meet your needs, combining premium craftsmanship, innovation, and affordability. Whether you’re shopping for essentials, unique gifts, or the latest trends, you’ll find everything you need in one convenient place.  

We pride ourselves on sourcing only the best products, ensuring they meet the highest standards of durability and performance. With a commitment to excellence, every item is thoroughly tested and comes with the guarantee of quality you can trust.  

Shopping with us means enjoying a seamless experience. Our user-friendly platform is designed to make browsing, selecting, and purchasing effortless. Plus, with secure payment options and fast shipping, your orders arrive at your doorstep quickly and safely.  

Our commitment doesn’t end with your purchase. We provide dedicated customer support to address any questions or concerns, ensuring your satisfaction every step of the way. Additionally, our loyalty programs and exclusive discounts make your shopping experience even more rewarding.  

Choose us because we care about your needs and strive to provide unparalleled value. With [Your Shopping Site’s Name], you’re not just buying products—you’re investing in quality and trust.</p>
      </div>
    <div className="feedback-container">
      {feedbackData.map(feedback => (
        <div key={feedback.id} className="feedback-item">
          <div className="feedback-icon">
            <img src={feedback.image} alt="Feedback" />
          </div>
          <p>{feedback.message}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Feedback;

