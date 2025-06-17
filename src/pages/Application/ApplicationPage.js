import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./ApplicationPage.css";

const sectors = [
  {
    name: 'Animal Care',
    images: [
      { src: 'https://imgs.search.brave.com/1Lzcx2DLHGcAeJPNH9ayaUXy-ZkTesNAE09HcuD31wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjgy/MTcyNjEvc3RvY2st/cGhvdG8tY293LWFu/ZC1jYWxm', text: 'Prevents vitamins and minerals deficiency' },
      { src: 'https://imgs.search.brave.com/yePwQf5YXBw5Tiba3UTf9cU8rRE-Ga-m6uqAZFr7eVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mYXJtLWZyZXNo/LW1pbGstcHJvZmVz/c2lvbmFsLWNhcHR1/cmVzLW1pbGstYmVp/bmctY29sbGVjdGVk/LWZyb20tZGFpcnkt/Y293cy1mYXJtLWVt/cGhhc2l6aW5nLWZy/ZXNobmVzcy1xdS1h/aS1nZW5lcmF0ZWQt/aWxsdXN0cmF0aW9u/Xzg2NjY2My0yNTA5/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw', text: 'Assured High and quality milk production' },
      { src: 'https://imgs.search.brave.com/I5bkhQK4PxZYSOBwXF0DRbyXCSSu8-D04Xqw5dhO-1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb3dzLWVhdGlu/Zy1mYXJtaW5nLWNh/dHRsZS1kYWlyeS1m/YXJtLWFncmljdWx0/dXJlLWdyb3d0aC1m/b29kLXByb2R1Y3Rp/b24tbmF0dXJlLWVh/dC1oZXJkLWh1bmdy/eS1hbmltYWxzLXdp/dGgtZmVlZC1jb3Vu/dHJ5c2lkZS1saXZl/c3RvY2stbGlmZXN0/eWxlLWluZHVzdHJ5/XzU5MDQ2NC0xOTYz/ODYuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA', text: 'Better udder health' },
      { src: 'https://imgs.search.brave.com/KuA5HCJ9v-7htmR5W242e7Wtlpfi54ZSLsOzkZjg0aw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwMzQz/MDQuanBn', text: 'Supreme SNF, Protein and taste content in milk' }
    ]
  },
  {
    images: [
      { src: 'https://imgs.search.brave.com/hTo7THhSUvzdIDurhTKC5xBjRH4bLl4XI4bN_00Izl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODcy/NjQ2Mjc2L3Bob3Rv/L2NoaWNrZW4tc3Vu/c2V0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz02QVMxZzE5/MmR3OUM4WXpRYkJH/ZUNYT1M0OU4yTUlU/SW9XellnRUtDeEM4/PQ', text: 'For growth, weight and activeness' },
      { src: 'https://imgs.search.brave.com/YFTIh1xGfBmwmfM3DFaMc_hxUP66ik3QhHOZXlcvpRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTQw/NTAyMDE4L3Bob3Rv/L2JhYnktY2hpY2tl/bnMtYXQtdGhlLWZh/cm0tZHJpbmtpbmct/d2F0ZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJTbE9M/MDRFVllpSU54SlFr/bWQ2V2x5QkFfNFRs/TmpGU2xjaEh4eTF2/Q0E9', text: 'Increases resistance of diseases' },
      { src: 'https://imgs.search.brave.com/JfKzN7XlsHS5DBle2P0nBDlBTqHiGE28QHkSiEPa-XM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTc3/OTYwMzEwL3Bob3Rv/L2NoaWNrZW5zLWVh/dGluZy1pbi1iYWNr/Z3JvdW5kLW9mLW11/bHRpLWNvbG9yZWQt/ZWdncy5qcGc_Yj0x/JnM9NjEyeDYxMiZ3/PTAmaz0yMCZjPUpp/N2hUdEw5eHF0dUtq/YmctbnZKNGMydkJV/LWxMZ1dCZEV3c2Vo/SzlKVnc9', text: 'Helps prevent problems of thin shell and broken egg and controls lameness' },
      { src: 'https://imgs.search.brave.com/WbG-W5FjhTyKp_jrU_LZeYdwV05DF7xyRAIjWrFCbKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTEz/MDQ2NTUyL3N0b2Nr/LXBob3RvLWNoaWNr/ZW5zLW9uLXRyYWRp/dGlvbmFsLWZyZWUt/cmFuZ2UtcG91bHRy/eS1mYXJt', text: 'Increases weight gain and metabolism' }
    ]
  },
  {
    name: 'Agriculture',
    images: [
      { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFncmljdWx0dXJlfGVufDB8fDB8fHww', text: 'Water solluble formulations, Environment friendly, Naturally derived agri care solutions' },
      { src: 'https://www.shutterstock.com/image-photo/drone-shot-tractor-spraying-lush-600nw-2464594961.jpg', text: 'Marine based seaweed provides important natural plant growth hormones, amino acids, vitamins, proteins and minerals' },
      { src: 'https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.jpg?s=612x612&w=0&k=20&c=h27yHr07QNSghYS20iwYBCGjZIa2HlXqrZDkM0ZsYEw=', text: 'Skillfully formulated micronutrients prevents crop growth deficiencies at different stages' },
      { src: 'https://t3.ftcdn.net/jpg/03/40/70/04/360_F_340700428_AquH6hbzeMOYLQ6g6kfWAMuUvfw60Zd1.jpg', text: 'Conditioning the soil and maintain and balances the ph level' }
    ]
  },
  {
    name: 'Personal Care',
    images: [
      { src: 'https://imgs.search.brave.com/qjkyEqMx_G6Ipx0uxiKzB6POnYxU-grAYDKDDhE7i4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzg2LzY0LzU5/LzM2MF9GXzEyODY2/NDU5MjJfNUVjY2tP/OXNiUmhzVm5vUkZX/VklHd3U0TEpyWk03/RWcuanBn', text: 'Scalp soothing and nourishing' },
      { src: 'https://imgs.search.brave.com/T4gB1MlGTVwwZmszFgHIZOoCVpLtiBNfiq0HB--RPiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzAxLzgxLzQz/LzM2MF9GXzEwMDE4/MTQzNzhfSmVzcmJr/M3lKdlU5VzJ5Tlhx/SmNkQ25hazRnazVz/VXouanBn', text: 'Reducing stress, Improving sleep' },
      { src: 'https://imgs.search.brave.com/BVr7KjnY4AXBs7QBCwgBWz_gPJY__H9in4R63xCazPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYWlyLXRyZWF0/bWVudC1jb25jZXB0/XzE3MzM4Ny02NTY4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA', text: 'Boosts hair growth' },
      { src: 'https://imgs.search.brave.com/Q37YvUHLbwNfKVs4RQqpFe-I65QvJ9bqsnNGjDa7XgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzY3LzI2Lzgx/LzM2MF9GXzEwNjcy/NjgxNzZfRWxNSER4/NEFIMDIwbExzUGxv/NVMwZzZjaEZYc2hl/RHguanBn', text: 'Vitamin E, which helps to postpone skin ageing, hydrate the face, and stretch wrinkles.' }
    ]
  }
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
        <h2 className="application-heading">Application</h2>  
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
