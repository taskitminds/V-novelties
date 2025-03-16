// ProductPage.js
import React from 'react';
import styles from './ProductsPage.css';

// Sample images (replace with actual image paths or URLs)
// import sampleImage1 from './images/sample1.jpg';
// import sampleImage2 from './images/sample2.jpg';
// Add more sample images as needed

const products = [
  {
    name: 'Abhal (Juniper)',
    description: `Juniper is an herb; the Juniper berry extract is used to make medicine. It's used to treat urinary tract infections, kidney and bladder stones, snakebite, diabetes, and cancer. Applied to the skin for treating wounds and soreness in joints and muscles. Also used in beauty products like lipstick, foundation, hair conditioners, bath oils, and eye shadow.`,
    benefits: [
      'Potent diuretic enhancing urine flow.',
      'Stimulates bile flow and digestive enzymes.',
      'Contains antioxidants and phytochemicals.',
      'Improves insulin production, reducing blood sugar levels.',
    ],
    // image: sampleImage1,
  },
  {
    name: 'Apium Graveolens (Ajmoda)',
    description: `Apium Graveolens seed extract is used in Ayurvedic medicine to treat flu, colds, water retention, digestive issues, spleen and liver disorders, and various types of arthritis. The whole plant, including roots, oil, and seeds, is used in medicine.`,
    benefits: [
      'Anti-inflammatory properties help reduce inflammation.',
      'Beneficial in treating bronchitis, asthma, and chronic skin disorders.',
      'Aids in digestion and improves liver health.',
      'Used to treat anxiety, arthritis, high blood pressure, and insomnia.',
    ],
    // image: sampleImage2,
  },
  // Add more products as needed
];

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <header className={styles.header}>
        <h1>Herbal Product Extract Supplier</h1>
        <p>Your trusted source for high-quality herbal extracts.</p>
      </header>
      <section className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productDetails}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>Benefits:</h3>
              <ul>
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
