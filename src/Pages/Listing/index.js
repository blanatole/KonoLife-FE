import Sidebar from "../../Components/Sidebar";
import bannerContent from '../../assets/images/bacola-banner-18.jpg';

const Listing = () => {
  return (
    <>
      <section className="product_listing_page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar/>

            <div className="content_right">
              <img src={bannerContent} className="w-100" style={{borderRadius:'8px'}} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listing;