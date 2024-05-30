import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Account, Wishlist, Home, Cart } from "./components/pages";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/wishlist" element={<Wishlist />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/account" element={<Account />}/>
            </Routes>
        </div>
    );
}

export default App;
