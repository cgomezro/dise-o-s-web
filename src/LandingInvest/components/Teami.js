import React, { useState } from "react";
import styles from "./../../sass/landinginvest/teami.module.scss";
import { Drawer, Typography, IconButton } from '@mui/material';
import classNames from "classnames";
import { shidan, mike, eddie, armita, jason, deven, peter, jonathan, johnny, william, natasha, jorge} from "./../assets/team2/";
import { CloseCircleOutline } from "mdi-material-ui";

const bios = [{
  id: 0,
  name: "Eddie Soleymani",
  bio: "Mr. Soleymani is a serial entrepreneur who founded the quant proprietary trading firm  Lynx Capital Partners. During its tenure as a prop firm, Lynx was home to some of the  top traders in the world and is now one of the major technology providers in the trading  and electronic brokerage industries. Mr. Soleymani is also the founder of Lucid  Absinthe; the first legal Absinthe in the US in 95 years. He is widely recognized as a  pioneer in the industry through spearheading the reintroduction and legalization of  Absinthe in North America. Mr. Soleymani received a BBA in finance from George  Washington University and an MBA from Hofstra University."
}, {
  id: 1,
  name: "Shidan Gouran",
  bio: "Mr. Gouran is one of the earliest investors in the blockchain sector and a serial  entrepreneur who cofounded ventures in the telecommunications, consumer electronics and esports industries, including: Nuovotel, the first Canadian CLEC to offer  wholesale VoIP services in Canada; Jazinga, the developers of the only Skype  approved business communications solution sold through the official Skype shop,  prior to Microsoft’s acquisition of Skype; Home Jinni, the developers of a Smart TV  solution that powered the majority of first-generation Android Smart TVs; and  Gamesquare, a gaming venture which is now one of the leading Canadian public  companies in the esports sector. Mr. Gouran studied Pure Mathematics and Theoretical  Physics at the University of Western Ontario."
}, {
  id: 2,
  name: "Mike Khoroshun",
  bio: "Mr. Koroshun is a seasoned software engineer with 10+ years of development  experience in blockchain technologies, decentralized finance, and AI. He has lead  software development projects at Home Jinni Inc., Skrumble, Global Blockchain  Technologies Corp., GEAR Capital Inc., Flurbo, BotVentures, and NextGen Blockchain  Technologies.",
}, {
  id: 3,
  name: "Armita Jalooli",
  bio: "Ms. Jalooli is experienced in technical research and data analysis in the cryptocurrency, blockchain and theoretical partical physics fields. She is now a CEO of a tech start-up and mentoring at the Entrepreneurship Hatchery at the University of Toronto.",
}, {
  id: 4,
  name: "Jason Sawyer",
  bio: "Mr. Sawyer is the Co-Founder of Caary Capital and a veteran of the alternative investment business. Currently, Jason is the General Manager of Access Alternative Group S.A., a Nassau, Bahamas-based venture investment and advisory firm.",
}, {
  id: 5,
  name: "Deven Soni",
  bio: "Mr. Soni is an experienced executive and investor in the digital assets space. He spent several years as a technology-focused investor at Goldman Sachs and Highland Capital Partners where he helped fund several top technology firms.",
}, {
  id: 6,
  name: "Peter Boockvar",
  bio: "Mr. Boockvar is the Chief Investment Officer at Bleakley Financial Group, a NJ based wealth management firm. He is also the Editor of The Boock Report, a macro market newsletter. Prior to joining Bleakley, he was the Chief Market Analyst at The Lindsey Group, a macro economic and market research firm founded by former Federal Reserve Governor Larry Lindsey. Before this, Mr. Boockvar worked as a macro analyst and portfolio manager for a brief time at Omega Advisors and had previously been a partner at Miller Tabak + Company where he was the equity strategist and a portfolio manager. He graduated magna cum laude from The George Washington University with a BBA in finance.",
}, {
  id: 7,
  name: "Jonathan Bonchick",
  bio: "Mr. Bonchick has held the positions of V.P./ Director of Buying & Merchandising for Duty Free Americas, Vice President for UETA Inc. of Panama, and Executive Vice President for Innovative Liquors LLC. From 1993 until he joined Duty Free Americas/UETA Inc., he held various positions within Brown-Forman Beverages Worldwide in the USA Domestic Market, Military & Transportation. In Mr. Bonchick's last position with Brown-Forman, he managed North America Duty Free and the Caribbean. He is also a founding partner who legalized Lucid Absinthe, the first legal Absinthe in the United States in 95 years. The company successfully sold Lucid to Hood River Distillers, Inc. in March 2013. Mr. Bonchick is the 3rd generation of his family in the spirits industry. He earned a B.S. in Finance from the University of Maryland (1991), as well as an MBA in International Business from the University of Miami (1992).",
},{
  id: 8,
  name: "Johnny Din",
  bio: "Mr. Din received a Bachelor of Arts in Business Economics from the University of California Los Angeles, graduating with Honors, and was a Riordan MBA Fellow from the UCLA Anderson School of Management. He holds a Certificate in Hotel Operations from New York University and a Master of Science in Real Estate Development from Columbia University, where he was the President of the MSRED Student Council, a Pension Real Estate Association Scholar, a Wells Fargo GDS Scholar, a William Kinne Fellow, and a recipient of the Scholastic Performance Award given to the top 3 graduates. Mr. Din is currently pursuing a Global Executive Doctor of Education from University of Southern California.",
}, 
{
  id: 9,
  name: "William Mikula",
  bio: "Mr. Mikula has been a force in the crypto currency, investing, and financial publishing industry for close to a decade. He's written and published seven books and his writings on crypto, stocks, options, the ESG movement, and real estate have been published in some of the largest newsletter publications in the world.",
}, {
  id: 10,
  name: "Natasha Ingram",
  bio: "Ms. Ingram is the Founder of Transparency, a Vancouver-based marketing agency founded in 2013. She is a seasoned consultant on launch, brand development, marketing strategies, acquisition, fundraising and growth. Industry experience includes tech, cannabis, mining and financial services. Ms. Ingram is also the Founder of BIA Skin, a D2C e-commerce brand doing 7 figures annually with distribution across North America.",
}, {
  id: 11,
  name: "Jorge A. Simmonds",
  bio: "Founder of Analytics Band, MR. Simmonds leads a team of analysts, developers, and data scientists offering business intelligence and full stack engineering solutions to clients spanning industries from digital advertising to space tourism. Having worked with industry leaders such as ESPN, Turner Broadcasting and Home Depot, he has developed a wide array of knowledge and experience in business strategy and analytics.",
}

]

const TeamInvestor = () => {
  const [drawer, setDrawer] = useState(false);
  const [bio, setBio] = useState(null);
  const handleClose = () => {
    setDrawer(false);
  };
  const displayBio = (id) => {
    const find_bio = bios.find((item) => id === item.id);
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Typography variant="h3">{find_bio?.name}</Typography>
          <IconButton size="large" onClick={() => setDrawer(false)}>
            <CloseCircleOutline />
          </IconButton>
        </div>
        <Typography dangerouslySetInnerHTML={{__html: find_bio?.bio}}/>
      </>
    )
  }
  return (
    <>
      <div id="team" className={classNames(styles["team"])}>
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-12">
            <h3>Our Team<span>Executive Leadership</span></h3>
            </div>
          </div>
          <div className="row mb-3 justify-content-md-center">
          <div className="col-lg-3 col-md-5 col-6">
              <img src={shidan} alt="Shidan Gouran" className="img-fluid" onClick={() => {setBio(1);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Shidan Gouran</h4>
              <p className={classNames(styles["position2"])}>Chairman</p>
            </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={eddie} alt="Eddie Soleymani" className="img-fluid" onClick={() => {setBio(0);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Eddie Soleymani</h4>
              <p className={classNames(styles["position2"])}>CHIEF EXECUTIVE OFFICER</p>
            </div>
           
            <div className="col-lg-3 col-md-5 col-6">
              <img src={mike} alt="Mike Koroshun" className="img-fluid" onClick={() => {setBio(2);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Mike Koroshun</h4>
              <p className={classNames(styles["position2"])}>CHIEF TECHNOLOGY OFFICER</p>
            </div>
          </div>

          <div className="row mb-3 text-center">
            <div className="col-12">
            <h3><span>Advisory Board</span></h3>
            </div>
          </div>
          <div className="row mb-3 justify-content-md-center">
          <div className="col-lg-3 col-md-5 col-6">
              <img src={armita} alt="Armita Jalooli" className="img-fluid" onClick={() => {setBio(3);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Armita Jalooli</h4>
              </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={jason} alt="Jason Sawyer" className="img-fluid" onClick={() => {setBio(4);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Jason Sawyer</h4>
                         </div>
                       <div className="col-lg-3 col-md-5 col-6">
              <img src={deven} alt="Deven Soni" className="img-fluid" onClick={() => {setBio(5);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Deven Soni</h4>
             </div>
          </div>

          <div className="row mb-3 justify-content-md-center">
          <div className="col-lg-3 col-md-5 col-6">
              <img src={peter} alt="Peter Boockvar" className="img-fluid" onClick={() => {setBio(6);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Peter Boockvar</h4>
             </div>
          <div className="col-lg-3 col-md-5 col-6">
              <img src={jonathan} alt="Jonathan Bonchick" className="img-fluid" onClick={() => {setBio(7);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Jonathan Bonchick</h4>
              </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={johnny} alt="Johnny Din" className="img-fluid" onClick={() => {setBio(8);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Johnny Din</h4>
                         </div>
          </div>


          <div className="row mb-3 justify-content-md-center">
                    <div className="col-lg-3 col-md-5 col-6">
              <img src={william} alt="Wiliam Mikula" className="img-fluid" onClick={() => {setBio(9);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>William Mikula</h4>
                         </div>
           
            <div className="col-lg-3 col-md-5 col-6">
              <img src={natasha} alt="Natasha Ingram" className="img-fluid" onClick={() => {setBio(10);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Natasha Ingram</h4>
             </div>
             <div className="col-lg-3 col-md-5 col-6">
              <img src={jorge} alt="Jorge A. Simmonds" className="img-fluid" onClick={() => {setBio(11);setDrawer(true)}}/>
              <br></br><br></br>
              <h4 className={classNames(styles["h42"])}>Jorge A. Simmonds</h4>
             </div>
          </div>

        </div>
      </div>
      <Drawer 
        keepMounted={false}
        anchor="left" 
        open={drawer} 
        onClose={() => handleClose()}
        >
          <div className={classNames(styles["bio"])}>
            {displayBio(bio)}
          </div>
      </Drawer>
    </>
  );
};

export default TeamInvestor;
