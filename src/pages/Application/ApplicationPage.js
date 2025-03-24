import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./ApplicationPage.css";
//import "../../assets/images/application/";

const sectors = [
  {
    name: 'Agriculture',
    images: [
      { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFncmljdWx0dXJlfGVufDB8fDB8fHww', text: 'Sustainable Farming Practices' },
      { src: 'https://www.shutterstock.com/image-photo/drone-shot-tractor-spraying-lush-600nw-2464594961.jpg', text: 'Crop Management Solutions' },
      { src: 'https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.jpg?s=612x612&w=0&k=20&c=h27yHr07QNSghYS20iwYBCGjZIa2HlXqrZDkM0ZsYEw=', text: 'Advanced Irrigation Techniques' },
      { src: 'https://t3.ftcdn.net/jpg/03/40/70/04/360_F_340700428_AquH6hbzeMOYLQ6g6kfWAMuUvfw60Zd1.jpg', text: 'Organic Farming Methods' }
    ]
  },
  {
    name: 'Dairy',
    images: [
      { src: 'https://t4.ftcdn.net/jpg/01/45/60/21/360_F_145602173_05uVexifBuCvWIKvsHGWNuIpPtp5ShkI.jpg', text: 'High-Quality Milk Production' },
      { src: 'https://img.freepik.com/premium-photo/still-life-with-dairy-product_772702-4885.jpg?semt=ais_hybrid', text: 'Dairy Farm Management' },
      { src: 'https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?s=612x612&w=0&k=20&c=5Xumh49_zYs9GjLkGpZXM41tS17K8M-svN9jLMv0JpE=', text: 'Innovative Dairy Products' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydcpjZgoRb33Z6HWMx-ohiEyxKAy1K0B57q3kHONs2C84SCa8xXWMgP9c5MLg-j0Joos&usqp=CAU', text: 'Sustainable Dairy Farming' }
    ]
  },
  {
    name: 'Food',
    images: [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPZ8Hv38DtbZs2gqhTLkKT-MgbmHTHpdHVw&s', text: 'Healthy Food Production' },
      { src: 'https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=', text: 'Organic Ingredients' },
      { src: 'https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1712832754805-I7IJ7FRXF629FN3PIS3O/KC310124-27.jpg', text: 'Quality Control' },
      { src: 'https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg', text: 'Food Safety Standards' }
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
    <div className="appli">
      <div className="a relative text-center py-6 overflow-hidden">
        {/* Banana Leaf Background */}
        <div className="relative inline-block px-10 py-6 bg-green-700 rounded-full shadow-lg leaf-bg">
          {/* About Us Title */}
          <h1 className="typing text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Application
          </h1>
        </div>
        </div>

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
