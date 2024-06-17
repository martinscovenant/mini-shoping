import React from 'react';
import './Wave.css';
import Header from './Header';
import Service from './Service';
import Features from './Features';
import Contact from './Contact';
import Feedback from './Feedback';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
       <Header />
      <main>
      <div className="main">
        <h1>Main Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos reprehenderit voluptas commodi laudantium sint, facere ipsa distinctio dicta quod, aut, explicabo sit animi eos. Quae, quis accusamus? Exercitationem, iusto!
        </p>
        <button>Sign Up!</button>
      </div>
      <div className="wave"></div>
      <Service />
      <Features />
      <Contact />
      <Feedback />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
