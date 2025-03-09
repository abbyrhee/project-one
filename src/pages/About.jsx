import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Yeppo</h1>
        <p className="tagline">Curating Quality for Every Lifestyle</p>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <h2>Our Mission</h2>
        <p>
          At Yeppo, we believe in making quality products accessible to everyone. 
          Our mission is to curate a thoughtful collection of beauty, fashion, and home items 
          that enhance your daily life while maintaining our commitment to sustainability 
          and ethical practices.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-section values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality First</h3>
            <p>
              We carefully select each product in our collection, ensuring it meets 
              our high standards for quality and durability.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>
              We prioritize eco-friendly materials and packaging, partnering with 
              brands that share our commitment to environmental responsibility.
            </p>
          </div>
          <div className="value-card">
            <h3>Ethical Practices</h3>
            <p>
              We work exclusively with suppliers who maintain fair labor practices 
              and safe working conditions throughout their supply chain.
            </p>
          </div>
          <div className="value-card">
            <h3>Customer Focus</h3>
            <p>
              Your satisfaction is our priority. We strive to provide exceptional 
              service and products that exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section story-section">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            Founded in 2024, Yeppo began with a simple idea: everyone deserves access 
            to quality products that bring joy and value to their daily lives. What 
            started as a small curated collection has grown into a diverse marketplace 
            offering carefully selected items across beauty, fashion, and home decor.
          </p>
          <p>
            Today, we continue to grow while staying true to our founding principles 
            of quality, sustainability, and customer satisfaction. Our team works 
            tirelessly to discover and bring you products that combine style, 
            functionality, and responsible production.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section commitment-section">
        <h2>Our Commitment to You</h2>
        <div className="commitment-content">
          <ul>
            <li>Carefully curated, quality-assured products</li>
            <li>Transparent pricing and business practices</li>
            <li>Responsive customer support</li>
            <li>Secure shopping experience</li>
            <li>Sustainable packaging and shipping practices</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
