import { useState } from "react";
import Product from "../Data.json"
import { Container,Row,Col } from "react-bootstrap";
import FilterGallery from "./FilterGallery";
import ShowGallery from "./ShowGallery";
import GalleryPagination from "./GalleryPagination";

const AllSelect = [
  "All",
  ...new Set(Product.map((item) => item.Spec.Efd.Name)),
];

function MainGallery () {
  const [galleryitem,setGalleryitem] = useState(Product);
  const [Selection,setSelection] = useState(AllSelect);
  const [Pageitem,setPageitem] = useState([]);
  const ProPerPage = 2;
  const [Page,setPage] =useState(1);
  const cut = Page*ProPerPage;

  function handlefilter(select){
    if(select === "All"){
      setGalleryitem(Product);
      return;
    }
    const GalleryProduct = Product.filter((item) => item.Spec.Efd.Name === select);
    setGalleryitem(GalleryProduct);
   }

   function HandlePage(page){
    const getpage = number.filter((x)=> x === page);
    setPage(getpage);
    const PageData = galleryitem.slice(cut-ProPerPage,cut);
    setPageitem(PageData);
  }   
    
    const PageCount = Math.ceil(galleryitem.length/ProPerPage);
    let number = [];
    for (let x = 1; x <= PageCount; x++) {number.push(x)}
    
  return (
    <div>
       <Container>
        <Row>
            <Col>
              <ShowGallery Selection={Selection} Selectitem={handlefilter} />
            </Col>
        </Row>
        <Row>
            <Col>
                <FilterGallery Filterproduct={Pageitem} />
            </Col>
        </Row>
        <Row>
            <Col>
                <GalleryPagination number={number} Page={Page} HandlePage={HandlePage} />
            </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default MainGallery