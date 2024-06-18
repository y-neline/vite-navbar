import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Account, Home, Cart } from "./components/pages";
import Wishlist  from "./components/pages/Wishlist/Wishlist";
import { WishlistProvider } from "./components/pages/Wishlist/WishlistContext";

function App() {
    return (
        <WishlistProvider>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/wishlist" element={<Wishlist />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/account" element={<Account />}/>
            </Routes>
        </div>
        </WishlistProvider>
    );
}

export default App;
