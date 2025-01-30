import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [bookListOriginal, setBookListOriginal] = useState([]);
    const [fakeBooksList, setFakeBooksList] = useState([]);

    function getBooksList() {

        axios
            .get("http://localhost:3000/books")
            .then((response) => {
                setBookListOriginal(response.data.items)
                setFakeBooksList(response.data.items)
            })
            .catch((error) => console.log(error))
            .finally("Data fetch completed")

    }

    useEffect(getBooksList, [])

    return (
        <GlobalContext.Provider value={{ bookListOriginal, setBookListOriginal, fakeBooksList, setFakeBooksList }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };