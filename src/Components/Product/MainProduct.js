import Products from '../Data.json';
import { useState } from 'react';
import ShowProduct from './ShowProduct';
import { Col,Row,Container,Alert, CardImg } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card }   from "react-bootstrap";
import { Link } from "react-router-dom";


function MainProduct () {
let RandomProduct = [];
let RandomNumber = [];

for(let a=1; a<61;a++){ RandomNumber.push(a)};
console.log(RandomNumber);
for(let b=RandomNumber.length-1;b>1;b--){
    let R = Math.floor(Math.random()*b);
    let x =RandomNumber[b];
    RandomNumber[b] = RandomNumber[R];
    RandomNumber[R] = x;
}

for(let i=0; i< Products.length; i++){
    let ShowProduct = Products.filter((x) => x.ID === RandomNumber[i]);
    RandomProduct = RandomProduct.concat(ShowProduct);
}

const [sort,setSort] =useState({
    by: "default",
    order: "asc"
})

const HandleSort = x => {
    const {name, value} = x.target;
    setSort(chose => ({...chose, [name] : value}));
}
console.log(sort);

  return (
    <div> 
        <select name='by' id='' className='Sort'onChange={HandleSort} value={sort.by} > 
            <option value='default'>Sort By</option>
            <option value='price'>Price</option>
            <option value='name'>Name</option>
        </select>
        <select name='order' id='' className='Sort'onChange={HandleSort} value={sort.order} > 
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
        </select>
        <Container>
            <Row>
                {RandomProduct.map((item,index) => (
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
    </div>
  )
}

export default MainProduct