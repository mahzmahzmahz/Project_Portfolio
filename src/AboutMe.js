import React from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function AboutMe(){
    return(
        <div className="container">
        <Container>
            <Row>
                <br></br>
                <Col id="alexpic" className="d-flex justify-content-center"></Col>
                <Col id="alexinfo" className="d-flex justify-content-center">
                    <h3>Full Stack Software Engineer</h3>
                    
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AboutMe;
