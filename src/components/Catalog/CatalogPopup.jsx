// CatalogPopup.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CatalogPopup.css";

export const CatalogPopup = ({ isOpen, onClose, genres }) => {
    const popupRef = useRef(null);
    const navigate = useNavigate();

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleGenreClick = (genre) => {
        onClose();
        navigate(`/genre/${encodeURIComponent(genre)}`);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="catalog-popup-overlay">
            <div className="catalog-popup" ref={popupRef}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Жанры</h2>
                <div className="genres-list-container">
                    <ul className="genres-list">
                        {genres.map((genre, index) => (
                            <li key={index} onClick={() => handleGenreClick(genre)}>{genre}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
