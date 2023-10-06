import { NavDropdown, Row } from "react-bootstrap";
import { Routes, Route, Link } from 'react-router-dom';
import Category from "./Category.json"

function MainCategory () {

  return (
    <div>
      <Row>
        <NavDropdown title="Category" id="basic-nav-dropdown"> 
          {Category.map((item,index) => (
              <NavDropdown.Item href={`/Category/${item.Id}`} key={index}>{item.Name}</NavDropdown.Item>
            ))}
        </NavDropdown>
      </Row>
           
    </div>
  )
}

export default MainCategory