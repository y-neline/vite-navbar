import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
  <nav>
    <Link to="/" className='title'>Website</Link>
    <div className='menu' onClick={() => {
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>

    </div>

    <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <SearchOutlinedIcon className='search-box-icon'/>
        </div>

    <ul className={menuOpen ? "open" : ""}>
        <li>
            <NavLink to="/wishlist"><FavoriteBorderOutlinedIcon/></NavLink>
        </li>
        <li>
            <NavLink to="/cart"><ShoppingCartOutlinedIcon/></NavLink>
        </li>
        <li>
            <NavLink to="/account"><PersonOutlineOutlinedIcon/></NavLink>
        </li>
    </ul>
  </nav>)
}
