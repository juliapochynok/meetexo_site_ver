import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Members.css';

let Xiumin = {
    name: "Xiumin",
    real_name: "Kim MinSeok (김민석)",
    position: "Lead Vocalist, Lead Dancer, Rapper",
    date_of_birth: "26th March 1990",
    nationality: "Korean",
    power: "Frost"
}

let Suho = {
    name: "Suho",
    real_name: "Kim JunMyeon (김준면)",
    position: "Leader, Lead Vocalist",
    date_of_birth: "22nd May 1991",
    nationality: "Korean",
    power: "Water"
}

let Lay = {
    name: "Lay",
    real_name: "Zhang Yixing (张艺兴)",
    position: "Main Dancer, Vocalist",
    date_of_birth: "7th October 1991",
    nationality: "Chinese",
    power: "Healing"
}

let Baekhyun = {
    name: "Baekhyun",
    real_name: "Byun BaekHyun (변백현)",
    position: "Main Vocalist",
    date_of_birth: "6th May 1992",
    nationality: "Korean",
    power: "Light"
}

let Chen = {
    name: "Chen",
    real_name: "Kim JongDae (김종대)",
    position: "Main Vocalist",
    date_of_birth: "21st September 1992",
    nationality: "Korean",
    power: "Thunder"
}

let Chanyeol = {
    name: "Chanyeol",
    real_name: "Park ChanYeol (박찬열)",
    position: "Main Rapper, Sub Vocalist, Visual",
    date_of_birth: "27th November 1992",
    nationality: "Korean",
    power: "Fire"
}

let DO = {
    name: "D.O",
    real_name: "Do KyungSoo (도경수)",
    position: "Main Vocalist",
    date_of_birth: "12th January 1993",
    nationality: "Korean",
    power: "Force"
}

let Kai = {
    name: "Kai",
    real_name: "Kim JongIn (김종인)",
    position: "Main Dancer, Sub Rapper, Sub Vocalist, Center, Visual",
    date_of_birth: "14th January 1994",
    nationality: "Korean",
    power: "Teleportation"
}

let Sehun = {
    name: "Sehun",
    real_name: "Oh SeHun (오세훈)",
    position: "Lead Dancer, Lead Rapper, Visual, Maknae",
    date_of_birth: "12th April 1994",
    nationality: "Korean",
    power: "Wind"
}


export default class Members extends Component {
    render() {
        return (
        <Container className="memRow"> 
        <Row className="memRow">
          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/xiumin.jpg" alt="Xiumin"/>
          <div className="MemMain">
                <h1 className="MemName">{Xiumin.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Xiumin.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Xiumin.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Xiumin.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Xiumin.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Xiumin.power}</h1> 
            </div>
          </Col>

          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/Suho.jpg" alt="Suho"/>
          <div className="MemMain">
                <h1 className="MemName">{Suho.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Suho.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Suho.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Suho.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Suho.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Suho.power}</h1> 
                <br></br> 
                <a href="https://www.instagram.com/kimjuncotton/"  className="SNS1"><img className="SNSPic1"  src="assets/insta.webp" alt="inst-logo" /></a>
            </div>
          </Col>

          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/lay.jpg" alt="Lay"/>
          <div className="MemMain">
                <h1 className="MemName">{Lay.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Lay.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Lay.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Lay.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Lay.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Lay.power}</h1>
                <br></br> 
                <a href="https://www.instagram.com/layzhang/?hl=en"  className="SNS1"><img className="SNSPic1"  src="assets/insta.webp" alt="inst-logo" /></a>
                <a href="https://twitter.com/layzhang?lang=en"  className="SNS1"><img className="SNSPic1"  src="assets/twt.png" alt="inst-logo" /></a>
                <a href="https://www.youtube.com/channel/UCROoY31pgrU66oSzkYdWWmw"  className="SNS1"><img className="SNSPic1"  src="assets/youtube.png" alt="inst-logo" /></a>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row className="memRow">
          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/baekhyun.jpg" alt="Baekhyun"/>
          <div className="MemMain">
                <h1 className="MemName">{Baekhyun.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Baekhyun.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Baekhyun.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Baekhyun.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Baekhyun.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Baekhyun.power}</h1> 
                <br></br>
                <a href="https://www.instagram.com/baekhyunee_exo/"  className="SNS1"><img className="SNSPic1"  src="assets/insta.webp" alt="inst-logo" /></a>
                <a href="https://twitter.com/b_hundred_hyun?lang=en"  className="SNS1"><img className="SNSPic1"  src="assets/twt.png" alt="inst-logo" /></a>
                <a href="https://www.youtube.com/channel/UCUyr5000laFgF79tWJB3rXQ"  className="SNS1"><img className="SNSPic1"  src="assets/youtube.png" alt="inst-logo" /></a>
            </div>
          </Col>

          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/chen.jpg" alt="Chen"/>
          <div className="MemMain">
                <h1 className="MemName">{Chen.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Chen.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Chen.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Chen.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Chen.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Chen.power}</h1> 
                <br></br> 
                <a href="https://www.youtube.com/channel/UC5vXjgHeenPq0lTSokouxdA"  className="SNS1"><img className="SNSPic1"  src="assets/youtube.png" alt="inst-logo" /></a>
            </div>
          </Col>

          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/chanyeol.jpg" alt="Chanyeol"/>
          <div className="MemMain">
                <h1 className="MemName">{Chanyeol.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Chanyeol.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Chanyeol.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Chanyeol.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Chanyeol.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Chanyeol.power}</h1>
                <br></br> 
                <a href="https://www.instagram.com/real__pcy/"  className="SNS1"><img className="SNSPic1"  src="assets/insta.webp" alt="inst-logo" /></a>
                <a href="https://www.youtube.com/channel/UCR4vlBiZ4Ua8Uzm9z91Qn1g"  className="SNS1"><img className="SNSPic1"  src="assets/youtube.png" alt="inst-logo" /></a>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row className="memRow">
          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/do.jpg" alt="DO"/>
          <div className="MemMain">
                <h1 className="MemName">{DO.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {DO.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {DO.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {DO.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {DO.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {DO.power}</h1> 
            </div>
          </Col>

          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/kai.jpg" alt="Kai"/>
          <div className="MemMain">
                <h1 className="MemName">{Kai.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Kai.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Kai.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Kai.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Kai.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Kai.power}</h1> 
                <br></br> 
                <a href="https://www.instagram.com/zkdlin/"  className="SNS1"><img className="SNSPic1"  src="assets/insta.webp" alt="inst-logo" /></a>
            </div>
          </Col>

          <Col xs={12} sm={4} className="person">
          <img className="MemPhoto" src="assets/sehun.jpg" alt="Sehun"/>
          <div className="MemMain">
                <h1 className="MemName">{Sehun.name}</h1>
                <h1 className="MInfo"> <strong>Real Name:</strong> {Sehun.real_name}</h1>
                <h1 className="MInfo"> <strong>Position:</strong> {Sehun.position}</h1>
                <h1 className="MInfo"> <strong>Birthday:</strong> {Sehun.date_of_birth}</h1>
                <h1 className="MInfo"> <strong>Nationality:</strong> {Sehun.nationality}</h1>
                <h1 className="MInfo"> <strong>Superpower:</strong> {Sehun.power}</h1>
                <br></br> 
                <a href="https://www.instagram.com/oohsehun/"  className="SNS1"><img className="SNSPic1"  src="assets/insta.webp" alt="inst-logo" /></a>
             </div>
          </Col>
        </Row>
        
        </Container>
        )
    }
}