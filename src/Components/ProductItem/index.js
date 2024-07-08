import { AiOutlineFullscreen } from "react-icons/ai";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import product1 from "../../assets/images/product1.jpg";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductItem = () => {
  return (
    <>
      <div className="item productItem">
        <div className="imgWrapper">
          <img src={product1} className="w-100" />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button><AiOutlineFullscreen /></Button>
            <Button><IoIosHeartEmpty /></Button>
          </div>
        </div>

        <div className="info">
          <h4>Werther's Original Caramel Hard Candies</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="newPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem;