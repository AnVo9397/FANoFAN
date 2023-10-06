import Button from 'react-bootstrap/Button';
import '../Product/Product.scss';

function ShowGallery ({Selection,Selectitem}) {
  return (
    <div>
        {Selection.map((item,index) => (
          <Button 
          className="button"
          variant="info" 
          key={index} 
          onClick={() => Selectitem(item)}
          >
            {item} 
          </Button>
        ))}
    </div>
  )
}

export default ShowGallery