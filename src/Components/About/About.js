import i from '../img/i.png'
import './About.css'



const About = () => {
  return (
  <div className='about-page'>
    <div className="container">
        <div className="aboutFlexContainer">
            <div className="imgSection">
                <div className="imgWrapper victoriaImgWrapper">
                    <img className='gridImage victoriaImg' src={i} alt="stoners-house" />
                </div>
            </div>
            <div className="aboutTextSection">
                <div className="descTitle titleLeft">About us</div>
                <div className="descText">We understand how it feels to be swamped by the daily grind. Getting cannabis shouldn’t be an added hassle to your busy life. It should be easy and stress free.</div>
                <div className="descText">Our hassle-free cannabis shopping platform features an easy to navigate menu, convenient payment options, and speedy relief delivered to your door. We guarantee that you’ll love our cannabis delivery, Portland!</div>
                <div className="descText"></div >
            </div>
        </div>

        </div>
  </div>
  )
};

export default About;
