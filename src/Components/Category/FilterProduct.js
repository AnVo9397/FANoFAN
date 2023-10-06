import { useParams } from "react-router-dom"
import Data from "../Data.json"
import { Col,Row,Container,Alert, CardImg } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card }   from "react-bootstrap";
import { Link } from "react-router-dom";

function FilterProduct () {
const {id} = useParams();
let Show = Data.filter((item) => item.Spec.Efd.Id == id);
let Title = Show.slice(0,1);
    
  return (
    <Container>
        <Row>
            {Title.map((item,index) => (
                <div key={index}>{item.Spec.Efd.Name}</div>
            ))}
        </Row>
        <Row>
            {Show.map((item,index) => (
                <Col xs={12} sm={6} md={3} key={index}>
                    <Card className="mt-3 mb-3 shadow"> 
                        <CardImg variant="left" src={item.Img1} alt={item.Name} />
                        <Card.Body>
                            <Card.Title>{item.Name}</Card.Title>
                            <Card.Text>{item.Description}</Card.Text>
                            <Card.Subtitle>{item.Price}</Card.Subtitle>
                            <Link to={`/ShowProduct/${item.ID}`}>
                                <Button variant="primary">Detail ...</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default FilterProduct