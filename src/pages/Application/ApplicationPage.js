import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./ApplicationPage.css";

const sectors = [
  {
    name: 'Agriculture',
    images: [
      { src: 'https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.jpg?s=612x612&w=0&k=20&c=h27yHr07QNSghYS20iwYBCGjZIa2HlXqrZDkM0ZsYEw=', text: 'Sustainable Farming Practices' },
      { src: 'https://media.istockphoto.com/id/1270570904/photo/harvesting-machine-approaching-wheat.jpg?s=612x612&w=0&k=20&c=jwDSrUojVqrpsjiSpIaHStrJWUnLHlXKlJlXXu2dhGE=', text: 'Crop Management Solutions' },
      { src: 'https://media.istockphoto.com/id/615269462/photo/tractor-mowing-green-field.jpg?s=612x612&w=0&k=20&c=NWmgExT2rJAxxy1XcUrukRLhbL4bntv4kLKJ5hSIRFE=', text: 'Advanced Irrigation Techniques' },
      { src: '/images/agriculture4.https://media.istockphoto.com/id/1447011226/photo/hydroponic-robot-farming.jpg?s=612x612&w=0&k=20&c=JVgQbVYavXC4xO3w8ea9TGcdEqNI68IgsGE97ZDKCI8=', text: 'Organic Farming Methods' }
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
  {
    name: 'Fragrances',
    images: [
      { src: '/images/fragrances1.jpg', text: 'Perfume Crafting' },
      { src: '/images/fragrances2.jpg', text: 'Aromatic Blends' },
      { src: '/images/fragrances3.jpg', text: 'Scent Extraction Techniques' },
      { src: '/images/fragrances4.jpg', text: 'Natural Scents' }
    ]
  },
  {
    name: 'Pharmaceuticals',
    images: [
      { src: '/images/pharmaceuticals1.jpg', text: 'Drug Formulation' },
      { src: '/images/pharmaceuticals2.jpg', text: 'Clinical Research' },
      { src: '/images/pharmaceuticals3.jpg', text: 'Therapeutic Solutions' },
      { src: '/images/pharmaceuticals4.jpg', text: 'Regulatory Standards' }
    ]
  },
  {
    name: 'Aromatherapy',
    images: [
      { src: '/images/aromatherapy1.jpg', text: 'Healing Oils' },
      { src: '/images/aromatherapy2.jpg', text: 'Relaxation Techniques' },
      { src: '/images/aromatherapy3.jpg', text: 'Scented Therapy' },
      { src: '/images/aromatherapy4.jpg', text: 'Holistic Treatments' }
    ]
  },
  {
    name: 'Neutraceuticals',
    images: [
      { src: '/images/neutraceuticals1.jpg', text: 'Health Supplements' },
      { src: '/images/neutraceuticals2.jpg', text: 'Nutritional Research' },
      { src: '/images/neutraceuticals3.jpg', text: 'Functional Foods' },
      { src: '/images/neutraceuticals4.jpg', text: 'Dietary Innovations' }
    ]
  },
  {
    name: 'Perfumery',
    images: [
      { src: '/images/perfumery1.jpg', text: 'Luxury Scents' },
      { src: '/images/perfumery2.jpg', text: 'Artistic Blending' },
      { src: '/images/perfumery3.jpg', text: 'Natural Essence Extraction' },
      { src: '/images/perfumery4.jpg', text: 'Signature Fragrances' }
    ]
  },
  {
    name: 'Ayurvedic',
    images: [
      { src: '/images/ayurvedic1.jpg', text: 'Traditional Healing' },
      { src: '/images/ayurvedic2.jpg', text: 'Herbal Remedies' },
      { src: '/images/ayurvedic3.jpg', text: 'Holistic Wellness' },
      { src: '/images/ayurvedic4.jpg', text: 'Ayurvedic Therapies' }
    ]
  }
];


const ApplicationPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500); // Simulate loading time
  }, []);

  return (

    <div className="app-container">
      <h1 className='a'><h1 className='typing'>Application</h1></h1>
      {/* Cloud Templates */}
      <motion.div
        className="clouds-container"
        initial={{ scale: 0.5, y: -100 }}
        animate={{ scale: loaded ? 1 : 0.5, y: loaded ? 0 : -100 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        {['Industries, be in the service of/perform duties on', 'Formulated products that serve a vast \nrange of industries but unbounded'].map((cloud, index) => (
          <motion.div
            key={index}
            className="cloud"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }}
          >
            <h2 className="cloud-title" style={{ padding: '10px', wordWrap: 'break-word' }}>
  {cloud}
</h2>
          </motion.div>
        ))}
      </motion.div>

      {/* Sectors */}
      {sectors.map((sector) => (
        <div key={sector.name} className="sector-container">
          <h2 className="sector-title">{sector.name}</h2>
          <div className="cards-container">
            {sector.images.map((image, index) => (
              <motion.div
                key={index}
                className="flip-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.src} alt="" className="image-style" />
                  </div>
                  <div className="flip-card-back">
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