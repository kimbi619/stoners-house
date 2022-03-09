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
                <div className="descText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quia excepturi cum tenetur adipisci aspernatur sequi itaque quos dolore eum?</div>
                <div className="descText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quia excepturi cum tenetur adipisci aspernatur sequi itaque quos dolore eum?</div>
                <div className="descText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quia excepturi cum tenetur adipisci aspernatur sequi itaque quos dolore eum?</div>

                {/* <div className="descText">{ t("aboutpage.text_two") }</div >
                <div className="descText">{ t("aboutpage.text_three") }</div> */}
            </div>
        </div>

        </div>
  </div>
  )
};

export default About;
