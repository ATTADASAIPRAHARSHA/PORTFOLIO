import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const handleAboutScroll = (className) => {
    const aboutSection = document.getElementById(className);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "Smooth", block: "end", inline: "nearest" });
    }
  };

  return (
    <>
      <div className="header">
        <div className="navlist">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about" onClick={()=>handleAboutScroll('about')}>About</a></li>
            <li><div className="logo"><img src="/file.png" width={230} height={100} alt="logo" /></div></li>
            <li><a href="#projects" onClick={()=>handleAboutScroll('project')}>Projects</a></li>
            <li><a href="#contact" onClick={()=>handleAboutScroll('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;