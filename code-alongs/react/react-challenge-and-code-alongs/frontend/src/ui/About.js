import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import image1 from '../images/logo512.png'

export function About () {
  return (
    <>
    <Container fluid className="backgroundImage position-relative">
          <h1>About Us</h1>
          <p className="position-absolute bottom-0 end-0">asdf asdfasdf asdfasdf asdfasdsff asdfsadf asdfasdf asdfasdf </p>
    </Container>

      <Container fluid className="py-3">
        <Row className="g-5">
          <Col lg={2}>
            <Image fluid className="d-block mx-auto" src={image1} alt="react is awesome"/>
          </Col>
          <Col lg={10}>
            <p>Jowl strip steak ut tri-tip et. Dolor pork belly in nisi, cillum fugiat shoulder sunt burgdoggen pig. Ipsum ut adipisicing tail, beef shank boudin andouille pancetta aliquip laboris t-bone bresaola ball tip.</p>
            <p>Enim pariatur pastrami spare ribs cow rump ipsum. In meatloaf ut ut cupim pariatur kevin veniam frankfurter. Anim ham alcatra, leberkas quis officia sed t-bone cow jowl elit aute strip steak. Cupim voluptate ham turkey, dolor boudin brisket tenderloin.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}