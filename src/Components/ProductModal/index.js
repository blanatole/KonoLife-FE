import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";

const ProductModal = (props) => {
  return (
    <>
      <Dialog open={true} className="productModal" onClose={()=>props.closeProductModal()}>
        <Button className='closeButton' onClick={()=>props.closeProductModal()}><MdClose /></Button>   
        <h4 className='mb-0'>All Natural Italian-Style Chicken Meatballs</h4>
      </Dialog>
    </>
  )
}

export default ProductModal;