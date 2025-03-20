import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./ApplicationPage.css";

const sectors = [
  {
    name: 'Agriculture',
    images: [
      { src: 'https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.jpg', text: 'Sustainable Farming Practices' },
      { src: 'https://media.istockphoto.com/id/1270570904/photo/harvesting-machine-approaching-wheat.jpg', text: 'Crop Management Solutions' },
      { src: 'https://media.istockphoto.com/id/615269462/photo/tractor-mowing-green-field.jpg', text: 'Advanced Irrigation Techniques' },
      { src: 'https://media.istockphoto.com/id/1447011226/photo/hydroponic-robot-farming.jpg', text: 'Organic Farming Methods' }
    ]
  },
  {
    name: 'Dairy',
    images: [
      { src: '/images/dairy1.jpg', text: 'High-Quality Milk Production' },
      { src: '/images/dairy2.jpg', text: 'Dairy Farm Management' },
      { src: '/images/dairy3.jpg', text: 'Innovative Dairy Products' },
      { src: '/images/dairy4.jpg', text: 'Sustainable Dairy Farming' }
    ]
  },
  {
    name: 'Food',
    images: [
      { src: '/images/food1.jpg', text: 'Healthy Food Production' },
      { src: '/images/food2.jpg', text: 'Organic Ingredients' },
      { src: '/images/food3.jpg', text: 'Quality Control' },
      { src: '/images/food4.jpg', text: 'Food Safety Standards' }
    ]
  },
];

const ApplicationPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="application-app-container">
      <h1 className='application-a'><span className='application-typing'>Application</span></h1>

      {/* Cloud Templates */}
      <motion.div
        className="application-clouds-container"
        initial={{ scale: 0.5, y: -100 }}
        animate={{ scale: loaded ? 1 : 0.5, y: loaded ? 0 : -100 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        {['Industries, be in the service of/perform duties on', 'Formulated products that serve a vast range of industries but unbounded'].map((cloud, index) => (
          <motion.div
            key={index}
            className="application-cloud"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }}
          >
            <h2 className="application-cloud-title" style={{ padding: '10px', wordWrap: 'break-word' }}>
              {cloud}
            </h2>
          </motion.div>
        ))}
      </motion.div>

      {/* Sectors */}
      {sectors.map((sector) => (
        <div key={sector.name} className="application-sector-container">
          <h2 className="application-sector-title">{sector.name}</h2>
          <div className="application-cards-container">
            {sector.images.map((image, index) => (
              <motion.div
                key={index}
                className="application-flip-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="application-flip-card-inner">
                  <div className="application-flip-card-front">
                    <img src={image.src} alt={image.text} className="application-image-style" />
                  </div>
                  <div className="application-flip-card-back">
                    <p>{image.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationPage;
