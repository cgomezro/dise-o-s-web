import React, { useState } from "react";
import styles from "./../../sass/landing/team.module.scss";
import { Drawer, Typography, IconButton } from '@mui/material';
import classNames from "classnames";
import { shidan, mike, deven, jason, eddie, armita } from "./../assets/team/";
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
  bio: "Ms. Jalooli is working at IOHK, an engineering company that builds cryptocurrencies  and blockchain as a Quantitative Analyst; she has multidisciplinary roles within the  Treasury and the Commercial teams at the firm. She is also completing her MSc thesis  in computer engineering at the University of Toronto focusing on the state of the art  Machine Learning techniques in Finance. For her undergraduate degree, Ms. Jalooli  studied a double major in physics and pure mathematics, which held multiple  scholarships.<br/><br/>Ms. Jalooli is experienced in technical research and spent four years as a data scientist  in theoretical particle physics. She then worked for two years at an asset management  firm as a senior financial data analyst and trader. She was the main technical  administrator and helped design the portfolio management platforms of the firm. Ms.  Jalooli also has a master’s degree from the Schulich school of Business, where she  graduated as one of the top students with distinction.<br/><br/>In 2021, Ms. Jalooli started her path as a tech Entrepreneur where she co-founded a  gaming start-up with an experienced team. She served as the CEO of the company. She is currently a part of the hatchery team of the University of Toronto helping start ups with UofT students in the fields of Fintech, Green Tech and Real estate.",
}, {
  id: 4,
  name: "Jason Sawyer",
  bio: "Mr. Sawyer is the Co-Founder of Caary Capital and a veteran of the alternative  investment business. Currently, Jason is the General Manager of Access Alternative  Group S.A., a Nassau, Bahamas-based venture investment and advisory firm that has  led and maintains investments in early-stage software, fintech, clean energy, natural  resource, and health & fitness, and consumer product companies.",
}, {
  id: 5,
  name: "Deven Soni",
  bio: "Mr. Soni is an experienced operations executive and investor. He spent several years  as a technology-focused investor at Goldman Sachs and Highland Capital Partners  where he helped fund several top technology businesses. He is the co-founder of  Wired Investors, a private equity fund focused on small cap buyouts. Mr. Soni is also a  founding director of Polymath, cofounder at Tokens.com, and an active investor in the  digital assets space.",
}]

const Team = () => {
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
      <div className={classNames(styles["team"])}>
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-12">
              <h3><span>Team</span>Who We Are</h3>
            </div>
          </div>
          <div className="row mb-3 justify-content-md-center">
            <div className="col-lg-3 col-md-5 col-6">
              <img src={eddie} alt="Eddie Soleymani" className="img-fluid" onClick={() => {setBio(0);setDrawer(true)}}/>
              <h4>Eddie Soleymani</h4>
              <p className={classNames(styles["position"])}>CEO</p>
            </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={shidan} alt="Shidan Gouran" className="img-fluid" onClick={() => {setBio(1);setDrawer(true)}}/>
              <h4>Shidan Gouran</h4>
              <p className={classNames(styles["position"])}>Chairman</p>
            </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={mike} alt="Mike Koroshun" className="img-fluid" onClick={() => {setBio(2);setDrawer(true)}}/>
              <h4>Mike Koroshun</h4>
              <p className={classNames(styles["position"])}>CTO</p>
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
          <div className="col-lg-3 col-md-5 col-6">
              <img src={armita} alt="Jason Sawyer" className="img-fluid" onClick={() => {setBio(3);setDrawer(true)}}/>
              <h4>Armita Jalooli</h4>
              <p className={classNames(styles["position"])}>Advisor</p>
            </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={jason} alt="Jason Sawyer" className="img-fluid" onClick={() => {setBio(4);setDrawer(true)}}/>
              <h4>Jason Sawyer</h4>
              <p className={classNames(styles["position"])}>Advisor</p>
            </div>
            <div className="col-lg-3 col-md-5 col-6">
              <img src={deven} alt="Deven Soni" className="img-fluid" onClick={() => {setBio(5);setDrawer(true)}}/>
              <h4>Deven Soni</h4>
              <p className={classNames(styles["position"])}>Advisor</p>
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

export default Team;
