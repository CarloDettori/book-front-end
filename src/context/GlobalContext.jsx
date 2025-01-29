import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [booksList, setBooksList] = useState([])

    function getBooksList() {

        axios
            .get("http://localhost:3000/books")
            .then((res) => { setBooksList(res.data.items) })
            .catch((error) => { console.log(console.log(error)) })
            .finally("Data Fetch Completed");

    }

    useEffect(getBooksList, [])

    return (

        <GlobalContext.Provider value={{ booksList, setBooksList }} >
            {children}
        </GlobalContext.Provider>

    )

}

export { GlobalContext, GlobalProvider }