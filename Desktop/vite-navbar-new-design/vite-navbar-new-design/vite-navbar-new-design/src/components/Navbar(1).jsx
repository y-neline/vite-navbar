import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import "./Navbar.css";
import { CatalogPopup } from "./Catalog/CatalogPopup";
import { bookCollection, getUniqueGenres } from "./books/BooksData"; // Adjust the import path as needed
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const genres = getUniqueGenres(bookCollection);

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 790) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        const userLoggedIn = localStorage.getItem('userLoggedIn');
        setIsLoggedIn(!!userLoggedIn);
    }, []);

    const isHomePage = location.pathname === "/";

    const toggleCatalog = () => {
        setIsCatalogOpen(!isCatalogOpen);
    };

    const handleAccountClick = () => {
        if (isLoggedIn) {
            history.push('/account'); // Navigate to the account page if logged in
        } else {
            history.push('/login'); // Navigate to the login page if not logged in
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userLoggedIn');
        setIsLoggedIn(false);
        history.push('/'); // Redirect to home page after logout
    };

    return (
        <>
            <nav className={`${isHomePage && !isScrolled ? "navbar-transparent" : "navbar-solid"}`}>
                <div className="catalog" onClick={toggleCatalog}>
                    <MenuIcon className="menu-icon" />
                    <p>КАТАЛОГ</p>
                </div>

                <Link to="/" className="title">
                    <img src="../../public/images/Logo.png" alt="Logo" className="logo" />
                </Link>

                <div className="search-box">
                    <input type="text" placeholder="Найти" />
                    <SearchOutlinedIcon className="search-box-icon" />
                </div>

                <ul>
                    <li>
                        <NavLink to="/wishlist">
                            <FavoriteBorderOutlinedIcon className="icons" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <ShoppingCartOutlinedIcon className="icons" />
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleAccountClick} className="icon-button">
                            <PersonOutlineOutlinedIcon className="icons" />
                        </button>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <button onClick={handleLogout} className="icon-button">
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
            <CatalogPopup isOpen={isCatalogOpen} onClose={toggleCatalog} genres={genres} />
        </>
    );
};
