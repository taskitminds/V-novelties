import React from 'react';
import './r&dpaje.css';
import Image from "../../assets/images/home/h2.webp";

const RandD = () => {
  return (
    <div className="rnd-page">
      <div className="rnd-container">
        <div className="rnd-text-container">
          <h1>INNOVATIVE SOLUTIONS of NOVEL PRODUCTS</h1>
          <div className="leaf-decorator">🌿🌿</div>
          <ul>
            <li>Vlife organize and deliver new product development with effective technical solutions.</li>
            <li>Vlife is dedicated to providing innovative solutions with flawless, quality-controlled, and assured products following global food safety management systems.</li>
            <li>Sophisticated R&D division consists of professional doctors, skillful engineers, technicians, and well-equipped analytical facilities constantly chasing knowledge and technology transfer with the aim of manufacturing novel and ingenious products, honoring customers' preferences.</li>
            <li>Offering world-class third-party/contract basis manufacturing based on the specifications and quantity as per customers' request.</li>
          </ul>
        </div>

        <div className="rnd-image-container">
          <img src={Image} alt="Production Facilities" />
        </div>
      </div>
    </div>
  );
};

export default RandD;
