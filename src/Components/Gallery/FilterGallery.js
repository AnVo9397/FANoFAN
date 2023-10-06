import { useState } from "react";
import { Col,Row,Container, CardImg } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card }   from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Product/Product.scss';

function FilterGallery ({Filterproduct}) {

  return (
    <Container>
        {Filterproduct.map((item,index) => (
            <Row>
                <Col xs={12} sm={9} md={4} key={index}>
                    <Card className="mt-3 mb-3 shadow"> 
                        <CardImg variant="left" src={item.Img1} alt={item.Name} className="Img"/>
                        <Card.Body>
                            <Card.Title>{item.Name}</Card.Title>
                            <Link to={`/ShowProduct/${item.ID}`}>
                                <Button variant="primary">Detail ...</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={9} md={4} key={index}>
                    <Card className="mt-3 mb-3 shadow"> 
                        <CardImg variant="left" src={item.Img2} alt={item.Name} className="Img" />
                        <Card.Body>
                            <Card.Title>{item.Name}</Card.Title>
                            <Link to={`/ShowProduct/${item.ID}`}>
                                <Button variant="primary">Detail ...</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={9} md={4} key={index}>
                    <Card className="mt-3 mb-3 shadow"> 
                        <CardImg variant="left" src={item.Img3} alt={item.Name} className="Img" />
                        <Card.Body>
                            <Card.Title>{item.Name}</Card.Title>
                            <Link to={`/ShowProduct/${item.ID}`}>
                                <Button variant="primary">Detail ...</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        ))}    
    </Container>
  )
}

export default FilterGallery