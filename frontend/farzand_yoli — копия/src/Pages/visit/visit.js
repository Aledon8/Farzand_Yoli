import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './visit.scss';

const VisitPage = () => {
  return (
    <div>
      <Navbar />
      <main className="visit-main">
        <div className="images-container">
          <img src={require('../../Images/visit-hero.webp')} alt="Visit Hero" className="responsive-image" />
        </div>
        <div className="images-container">
            <img src={require('../../Images/visit-layot.webp')} alt="Visit Layout" className="responsive-image" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisitPage;
