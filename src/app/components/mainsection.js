
import React from 'react';
import Image from 'next/image';

const MainSection = () => {
  return (
    <section>
      <div className="main-container">
        <div className="image">
          <Image 
            src="/main.jpg"  
            alt="Main" 
            width={600}       
            height={400}      
          />
        </div>
        <div className="content">
          <h1>
            Hey, I&apos;m <span>Rabia</span>
          </h1>
          <div className="typewriter">
            I&apos;m a <span className="typewriter-text"></span>
            <label htmlFor="">| Developer | Freelancer | Designer</label>
          </div>
          <p>
            As a developer, designer, and freelancer, I specialize in
            creating stunning, responsive websites that seamlessly blend
            functionality with aesthetics. I offer a range of services,
            including custom web development and visual design, tailored to
            meet your unique needs. My goal is to deliver high-quality
            solutions that enhance user experience and drive engagement. Let&apos;s
            collaborate to bring your vision to life and achieve your project
            goals!
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fa-brands fa-github"></i> {/* GitHub icon */}
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i> {/* Facebook icon */}
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i> {/* LinkedIn icon */}
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i> {/* Twitter icon */}
            </a>
          </div>
          <div className="btn">
            <button>Hire me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
