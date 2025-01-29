import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [booksList, setBooksList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getBooksList = async () => {
        try {
            const response = await axios.get("http://localhost:3000/books");
            setBooksList(response.data.items);
        } catch (error) {
            console.error("Errore durante il fetch dei libri:", error);
        }
    };
    const filteredBooks = booksList.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        getBooksList();
    }, []);

    return (
        <GlobalContext.Provider value={{ booksList, setBooksList, searchQuery, setSearchQuery, filteredBooks }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };