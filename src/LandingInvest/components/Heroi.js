import React from 'react';
import './../../sass/landinginvest/modal.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import play from "./../assets/icons/play.svg";
import republic from "./../assets/icons/Republic.png";
import classNames from "classnames";
import styles from "./../../sass/landinginvest/heroi.module.scss";
import pdf from "./../assets/icons/pdf.png";

class App extends React.Component{
  state={
    abiertov: false,
  }

  abrirModalv=()=>{
    this.setState({abiertov: !this.state.abiertov});
  };
  state={
    abiertof: false,
  }

  abrirModalf=()=>{
    this.setState({abiertof: !this.state.abiertof});
  }

  render(){

   
    return(
      
      <><div id="hinvest" className="principal">
 <div className="container">
        <div className="secundario">


          <div className="row">

            <div className="col-12 mb-3 mb-md-0">
              <h2>
                <span className="primary">
                  BUILDING THE FIGHT
                </span>
                <br />
                <span className="secondary">
                AGAINST CLIMATE CHANGE
                </span>
                <br />
              </h2>

            </div>


            <div className="col-12 mb-3 mb-md-0">
              <div className="boximg">
                <img src={play} alt="play" className="play" onClick={this.abrirModalv} />

              </div>
            </div>

     

            <div className="col-12 mb-3 mb-md-0">
              <div className="boxtxt">
                <p>
                The <span className="bce">Bluesphere Carbon Exchange</span> is a global trading platform that allows 
                anyone - businesses, carbon credit suppliers, and even investors - to buy,
                 hold, and sell carbon credits. It was founded on the belief that the best
                  way to continue building the fight against climate change is to gain larger
                   interest through investment opportunities.
                </p>

              </div>
            </div>


            <div className="col-md-2 col-12"></div>

            <div className="col-md-4 col-12 align-items-center">
            <div className="divisor">

<a className={classNames(styles["innow"])} href="#" rel="noreferrer" style={{ textDecoration: "none" }}>
<button className={classNames(styles["btoni"])} ><span className={classNames(styles["ideck"])}>Invest Now
<br></br>
<img src={republic} alt="Republic" className="republic" />
</span>                            
</button> </a>
</div>
            </div>

            <div className="col-md-4 col-12">
              <div className="divisor">

                  
                    <button className={classNames(styles["btoni"])} onClick={this.abrirModalf}><span className={classNames(styles["ideck"])}>Investor Deck
                    <br></br>
                    <span className={classNames(styles["down"])}>Download 
                    
                  <img className={classNames(styles["pdf"])} src={pdf} alt="Pdf" />
                  </span></span>                            
                 </button> 
              </div>

             
            </div>
<div className="col-md-2 col-12"></div>
          </div>


        </div>
        </div>
        </div>

        <Modal modalClassName="modalf" isOpen={this.state.abiertof} size="lg">
          <ModalHeader>
      <Button className="bf" color="secondary" onClick={this.abrirModalf}>X</Button>
    </ModalHeader>
          <ModalBody>
          <div className={classNames(styles["form"])}>     
<div className="row">
      <div className="col-lg-7 md-12 form">
        
        <div className={classNames(styles["formdeck"])}>
             <h3>POTENTIAL BLUESPHERE INVESTOR</h3>
             <Form inline onSubmit={(e) => e.preventDefault()}>
             <FormGroup>
            <Input className="lform" placeholder="First Name" type="text" id="fname"/> 
          </FormGroup>
          <FormGroup>
               <Input className="lform" placeholder="Email Address" type="email" id="email"/> 
          </FormGroup>
          <FormGroup>
            <Input className="lform"placeholder="Phone Number" type="number" id="phone"/> 
          </FormGroup>
          <FormGroup>
          <Label className="aya" for="select">Are you accredited?</Label>
          <Input id="select" className="lform" name="select" type="select">
            <option value=""selected>Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not sure">Not Sure</option>
          </Input>

          </FormGroup>
          <FormGroup>
          <div className={classNames(styles["footd"])}>
            <Input type="checkbox" className="check lform"/> 
            <Label for="check"><span className={classNames(styles["sign"])}>Sign up to receive future investment opportunities.
            <br></br>Zero spam. Unsubscribe at anytime.</span>
             </Label>
             </div>
          </FormGroup>
          <div className={classNames(styles["footd"])}>
          <Button type="submit" className="bd" color="secondary">Download</Button></div>
          </Form>
        </div>
      </div>
      <div className="col-lg-5 md-12 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block form">
        <div className={classNames(styles["image"])}>
   
        </div>
      </div>
    </div>
</div>
        </ModalBody>
        </Modal>


        
        <Modal modalClassName="modal" isOpen={this.state.abiertov} size="lg">
          <ModalHeader>
      <Button className="bv" color="secondary" onClick={this.abrirModalv}>X</Button>
    </ModalHeader>
          <ModalBody>
        
            <video width="100%" controls autoPlay>
              <source src="Videos/intro.mp4" type="video/mp4" />
            </video>
        </ModalBody>
          <ModalFooter>
          <a className={classNames(styles["innowm"])} href="#" rel="noreferrer" style={{ textDecoration: "none" }}>
<button className={classNames(styles["btonim"])} ><span className={classNames(styles["ideckm"])}>Invest Now
<br></br>
<img src={republic} alt="Republic" className="republic" />
</span>                            
</button> </a>     
          </ModalFooter>
        </Modal></>
      
    )
  }
}

export default App;


