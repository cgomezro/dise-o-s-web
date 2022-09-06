import React from "react";
import styles from "./../../sass/landing/footer.module.scss";
import classNames from "classnames";
import logot from './../assets/Logot.jpg'
import facebook from './../assets/icons/social/facebook.png';
import twitter from './../assets/icons/social/twitter.png';
import linkedin from './../assets/icons/social/linkedin.png';
import youtube from './../assets/icons/social/youtube.png';
// import tiktok from './../assets/icons/social/tiktok.svg';
import instagram from './../assets/icons/social/instagram.png';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = (props) => {
  return (
    <div style={{background:"#fff"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classNames(styles["footer"])}>
              <div className="row">

                <div className={classNames(styles["blue"],"col-md-3 col-12 ")}>
                <HashLink smooth  to="/#" style={{ textDecoration: "none" }}>
                  <img src={logot} className="img-fluid" alt="BlueSphere"/>
                  </HashLink>
                   </div>

                <div className={classNames(styles["menu"],"col-md-3 col-12")}>
                <div >
                <HashLink smooth  to="/#" style={{ textDecoration: "none" }}>Home</HashLink><br></br>
                <HashLink smooth  to="Investor#invest" style={{ textDecoration: "none" }}>Invest</HashLink><br></br>
                    <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
                    </div>
                   </div>

                <div className={classNames(styles["menu1"],"col-md-3 col-12")}>
                <div >
                <Link to="/" style={{ textDecoration: "none" }}>Contact Us</Link><br></br>
                    <Link to="/" style={{ textDecoration: "none" }}>Privacy Policy</Link><br></br>
                    <HashLink smooth to="/tos/#" style={{ textDecoration: "none" }}>Terms & Conditions</HashLink>
                    </div>
                  </div>

                <div className={classNames(styles["social"],"col-md-3 col-12")}>
                {/*<a className={classNames(styles["indeck"])} href="/BlueSphereCarbon_Deck.pdf" target="_blank" style={{ textDecoration: "none" }}>
                    <button className={classNames(styles["btoni"])} ><span className={classNames(styles["ideck"])}>Investor Deck
                     </span>                            
  </button> </a>*/}
              <br></br>
                <a href="https://facebook.com/" target="_blank" className="me-1" rel="noreferrer">
                    <img src={facebook} className="facebook" alt="Facebook"/>
                  </a>
                  <a href="https://instagram.com/" target="_blank" className="me-2" rel="noreferrer">
                    <img src={instagram} className="instagram" alt="Instagram"/>
                  </a>
                  <a href="https://twitter.com/" target="_blank" className="me-2" rel="noreferrer">
                    <img src={twitter} className="twitter" alt="Twitter"/>
                  </a>
                  <a href="https://www.youtube.com" target="_blank" className="me-1" rel="noreferrer">
                    <img src={youtube} className="Youtube" alt="Youtube"/>
                  </a>
                  
                  <a href="https://linkedin.com/" target="_blank"  className="me" rel="noreferrer">
                    <img src={linkedin} className="linkedin" alt="Linkedin"/>
                     </a>
                </div>



              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
