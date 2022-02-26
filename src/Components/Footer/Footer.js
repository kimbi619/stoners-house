import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return(
  <div className='footerWrapper'>
      <div className="container">
        <div className="footerContent">
          <div className="about">
              <div className="descTitle">About us</div>
              <Link to="/"><div className="descText">gallery</div></Link>
              <Link to="/"><div className="descText">get to know us</div></Link>
              <Link to="/"><div className="descText"><AiOutlinePhone /> Tell</div></Link>
              <a href="mailto:stonershouseofficial@gmail.com"><div className="descText">
                <AiOutlineMail />email us</div></a>
          </div>
          <div className="buy">
              <div className="descTitle">buy</div>
              <Link to="/products"><div className="descText">store</div></Link>
              <Link to="/"><div className="descText"> privacy </div></Link>
              <Link to="/contact-us"><div className="descText"> stories </div></Link>
              <Link to="/about"><div className="descText"> stories</div></Link>
              <Link to="/contact-us"><div className="descText"> help </div></Link>

          </div>
          <div className="others">
              <div className="descTitle">Others</div>
              <Link to="/contact-us"><div className="descText"> FAQs </div></Link>
              <Link to="/contact-us"><div className="descText"> report Error </div></Link>
              <Link to="/#lang"><div className="descText"> language </div></Link>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Footer;
