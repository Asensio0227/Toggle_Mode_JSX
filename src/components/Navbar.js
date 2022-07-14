import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const containerRef = useRef(null);
  const linkRef = useRef(null);

  const toggle = () => {
    setShowLinks(!showLinks);  }

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    
    if (showLinks) {
      containerRef.current.style.height=`${linksHeight}px`
    }else{
      containerRef.current.style.height = '0px';
    }
  },[showLinks])

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h4>
            sky<span>coding</span>
          </h4>
          <button className="nav-btn" onClick={toggle}>
            <FaBars/>
          </button>
        </div>
        <div ref={containerRef} className="links-container">
          <ul ref={linkRef} className="nav-links">
            {links.map((link)=>{
              const {id,url,text}=link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { id, url, icon } = icons;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
