import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Account, Home } from "./components/pages";
import Cart from "./components/pages/Cart/Cart"
import Wishlist  from "./components/pages/Wishlist/Wishlist";
import { WishlistProvider } from "./components/pages/Wishlist/WishlistContext";
import { CartProvider } from "./components/pages/Cart/CartContext";
import GenrePage from "./components/books/genre/GenrePage"
import Login from "./components/pages/login"

function App() {
    return (
        <WishlistProvider>
            <CartProvider>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/wishlist" element={<Wishlist />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/account" element={<Account />}/>
                <Route path="/genre/:genre" element={<GenrePage />} />
                <Route path="/login" element = {<Login />}/>
            </Routes>
        </div>
        </CartProvider>
        </WishlistProvider>
    );
}

export default App;
