import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Header.css';

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
          <ul className="nav-menu">
            <li><Link className="nav-link" to="/">Home <span className="underline"></span></Link></li>
            <li><a className="nav-link" href="#about" onClick={() => handleAboutScroll('about')}>About <span className="underline"></span></a></li>
            <li><div className="logo"><img src="/file.png" width={120} height={55} alt="logo" /></div></li>
            <li><a className="nav-link" href="#projects" onClick={() => handleAboutScroll('project')}>Projects <span className="underline"></span></a></li>
            <li><a className="nav-link" href="#contact" onClick={() => handleAboutScroll('contact')}>Contact <span className="underline"></span></a></li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Header;