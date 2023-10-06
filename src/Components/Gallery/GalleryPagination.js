import Pagination from 'react-bootstrap/Pagination';


function GalleryPagination ({number,Page,HandlePage}) {
  
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {number.map((item,index) => (
      <Pagination.Item 
      key={index} 
      active={item === Page} 
      onClick = {() => HandlePage(item)} 
      >
        {item}
      </Pagination.Item>
      ))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default GalleryPagination