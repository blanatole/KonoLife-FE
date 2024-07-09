import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import sildeBanner from '../../assets/images/sidebar-banner.gif';

const Sidebar = () => {

  const [value, setValue] = useState([0, 5000]);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div className="sidebar">

        {/* Filter by categories */}
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>

          <div className='scroll'>
            <ul>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Women" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Watches" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Kids" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Gifts" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Men" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Watches" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Kids" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Gifts" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Men" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Gifts" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Men" /></li>
            </ul>
          </div>
        </div>

        {/* Filter by price */}
        <div className="filterBox">
          <h6>FILTER BY PRICE</h6>

          <RangeSlider value={value} onInput={setValue} min={0} max={5000} step={50} />

          <div className='d-flex pt-2 pb-2 priceRange'>
            <span>From: <strong className='text-dark'>${value[0]}</strong></span>
            <span className='ml-auto'>to: <strong className='text-dark'>${value[1]}</strong></span>
          </div>
        </div>

        {/* Product status */}
        <div className="filterBox">
          <h6>PRODUCT STATUS</h6>

          <div className='scroll'>
            <ul>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" /></li>
            </ul>
          </div>
        </div>

        {/* Brands */}
        <div className="filterBox">
          <h6>BRANDS</h6>

          <div className='scroll'>
            <ul>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Oreo" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Quaker" /></li>
              <li><FormControlLabel className='w-100' control={<Checkbox />} label="Welch's" /></li>
            </ul>
          </div>
        </div>

        <Link to="#">
          <img src={sildeBanner} className='w-100' />
        </Link>

      </div>



    </>
  )
}

export default Sidebar;