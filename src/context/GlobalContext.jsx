import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [booksList, setBooksList] = useState([]);

    function getBooksList() {
        axios
            .get("http://localhost:3000/books")
            .then((res) => setBooksList(res.data.items))
            .catch((error) => console.log(error))
            .finally(() => console.log("Data Fetch Completed"));
    }

    useEffect(() => {
        getBooksList();
    }, []);

    return (
        <GlobalContext.Provider value={{ booksList, setBooksList }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };