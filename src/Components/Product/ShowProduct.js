import { useParams } from "react-router-dom"
import Product from "../Data.json"
import { Row,Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Product.scss';

function ShowProduct () {
  const{id} = useParams();
  let Detail = Product.filter((x) => x.ID == id);
  Detail = Detail[0];

  return (
    <div>
      <div className="Title">{Detail.Name}</div>
      <main >
        <Row>
          <Col xs={12} sm={9} md={4}>
            <Row>
              <img className="MainImg" src={Detail.Img1}  alt={Detail.Name} />
            </Row>
            <Row>
              <Col xs={6} md={6}>
              <img className="OtherImg" src={Detail.Img2} alt={Detail.Name} /> 
              </Col>
              <Col xs={6} md={6}>
              <img className="OtherImg" src={Detail.Img3} alt={Detail.Name} />
              </Col>
            </Row>
          </Col>
          <Col className="MainProduct">
            <Row className="Desc">{Detail.Description}</Row>
            <Row className="Price">{Detail.Price}</Row>
            <Row className="Rate"> Rating : {Detail.Rate}</Row>
            <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify>
              <Tab eventKey="Spec" title="Specification" className="Spec">
                <Row>
                <Col xs={6} md={5} className="col">
                  <Row>Brand : {Detail.Spec.Brand}</Row>
                  <Row>Color : {Detail.Spec.Color}</Row>
                  <Row>Category : {Detail.Spec.Efd.Name}</Row>
                  <Row>Style : {Detail.Spec.Style}</Row>
                  <Row>Power Source : {Detail.Spec.Power}</Row>
                </Col>
                <Col xs={6} md={7} className="col">
                  <Row>Product Dimensions : {Detail.Spec.Dimension}</Row>
                  <Row>Room Type : {Detail.Spec.Room}</Row>
                  <Row>Special Feature : {Detail.Spec.Feature}</Row>
                  <Row>Recommended Uses For Product :{Detail.Spec.Recommend}</Row>
                </Col> 
                </Row>              
              </Tab>
              <Tab eventKey="Type" title="Type" className="Type">
                <Row>Mounting Type : {Detail.Spec.Type.Mounting}</Row>
                <Row>Controller Type : {Detail.Spec.Type.Controller}</Row>
                <Row>Number of Speeds : {Detail.Spec.Type.Speeds}</Row>
                <Row>Number of Blades : {Detail.Spec.Type.Blades}</Row>
                <Row>Material : {Detail.Spec.Type.Material}</Row>
              </Tab>
              <Tab eventKey="download" title="Download" >
              <Button href={Detail.File} variant="outline-primary">Download</Button>
              </Tab>
            </Tabs> 
          </Col>
        </Row> 
          <Button className="buttonAdd">
            Add to Cart
          </Button>
      </main>
    </div>
  )
}

export default ShowProduct