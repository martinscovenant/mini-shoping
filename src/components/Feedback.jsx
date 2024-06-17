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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

