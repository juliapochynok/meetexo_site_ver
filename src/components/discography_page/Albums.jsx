import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Albums.css';



export default class Albums extends Component {
    render() {
        return (
        <Container className="memRow1"> 
        <Row className="memRow1">
          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/mama1.jpg" alt="mama"/>
          <div className="MemMain1">
                <h1 className="MemName1">MAMA</h1>
                <h1 className="MInfo1"> 1st Mini Album (2012)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/xoxo.jpg" alt="xoxo"/>
          <div className="MemMain1">
                <h1 className="MemName1">XOXO</h1>
                <h1 className="MInfo1"> 1st Full Album (2013)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/mid.jpg" alt="MID"/>
          <div className="MemMain1">
                <h1 className="MemName1">Miracles in December</h1>
                <h1 className="MInfo1"> 1st Special Winter Album (2013)</h1>
        </div>
          </Col>
        </Row>

        <Row className="memRow1">
          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/overdose.png" alt="overdose"/>
          <div className="MemMain1">
                <h1 className="MemName1">Overdose</h1>
                <h1 className="MInfo1"> 2nd Mini Album (2014)</h1>
        </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/exodus.jpg" alt="exodus"/>
          <div className="MemMain1">
                <h1 className="MemName1">EXODUS</h1>
                <h1 className="MInfo1"> 2st Full Album (2015)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/sfy.jpg" alt="sing for tou"/>
          <div className="MemMain1">
                <h1 className="MemName1">Sing for You</h1>
                <h1 className="MInfo1"> 2nd Special Winter Album (2015)</h1>
            </div>
          </Col>
        </Row>
        
        <Row className="memRow1">
          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/exact1.jpg" alt="exact"/>
          <div className="MemMain1">
                <h1 className="MemName1">Ex'Act</h1>
                <h1 className="MInfo1"> 3rd Full Album (2016)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/forlife.jpg" alt="for life"/>
          <div className="MemMain1">
                <h1 className="MemName1">For Life</h1>
                <h1 className="MInfo1"> 3rd Special Winter Album (2016)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/thewar.jpg" alt="the war"/>
          <div className="MemMain1">
                <h1 className="MemName1">The War</h1>
                <h1 className="MInfo1"> 4th Full Album (2017)</h1>
            </div>
          </Col>
        </Row>
        
        <Row className="memRow1">
          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/universe.jpg" alt="universe"/>
          <div className="MemMain1">
                <h1 className="MemName1">Universe</h1>
                <h1 className="MInfo1"> 4th Special Winter Album (2017)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/tempo.jpg" alt="dnumt"/>
          <div className="MemMain1">
                <h1 className="MemName1">Don't Mess Up My Tempo</h1>
                <h1 className="MInfo1">5th Full Album (2018)</h1>
            </div>
          </Col>

          <Col xs={12} sm={4} className="album">
          <img className="MemPhoto1" src="assets/obsession.png" alt="obsession"/>
          <div className="MemMain1">
                <h1 className="MemName1">OBSESSION</h1>
                <h1 className="MInfo1"> 6th Full Album (2019)</h1>
            </div>
          </Col>
        </Row>
        
        </Container>
        )
    }
}