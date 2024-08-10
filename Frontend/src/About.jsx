import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <h2>Empowering the Next Generation of Farmers</h2>
      </header>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At YuvaKrishi, our mission is to connect the next generation of
          farmers with opportunities to make a difference. We aim to revolutionize
          traditional farming by integrating elements of gaming and social networking,
          making farming engaging and accessible for young minds.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where young people actively participate in agriculture,
          leveraging modern technology to drive sustainable practices and innovative
          solutions. By creating a platform that blends learning with hands-on experience,
          we strive to foster a new wave of agripreneurs who are passionate about making
          a positive impact on the environment and society.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Embracing new technologies and ideas to enhance agricultural practices.</li>
          <li><strong>Sustainability:</strong> Promoting eco-friendly methods that support long-term environmental health.</li>
          <li><strong>Community:</strong> Building a supportive network where youth can collaborate, share, and grow together.</li>
          <li><strong>Education:</strong> Providing valuable learning experiences to equip the next generation with the skills they need for success in agriculture.</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team is composed of experts in agriculture, technology, and
          education. Each member brings unique skills and a shared passion for transforming
          the future of farming. Together, we work tirelessly to create a platform that
          empowers youth and supports their journey in the agricultural sector.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Impact</h2>
        <p>
          Since our inception, YuvaKrishi has positively impacted thousands of young
          individuals by providing them with hands-on farming experience and opportunities
          for growth. Our platform has not only facilitated investments in farming but
          has also contributed to the development of innovative agricultural practices
          and sustainable solutions.
        </p>
      </section>
      <section className="about-section">
        <h2>Get In Touch</h2>
        <p>
          We would love to hear from you! Whether you have questions, feedback, or are
          interested in partnering with us, please feel free to reach out. You can contact
          us at yuvakrishi@gmail.com or follow us on our social media channels for the latest updates.
        </p>
      </section>
    </div>
  );
};

export default About;
