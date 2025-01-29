import { createContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [bookList, setBookList] = useState([])
    const [reviewList, setReviewList] = useState([])



    function getMovieListData() {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => {
                //console.log(res.data.items)
                setMovieList(res.data.items)
                setReviewList(res.data.items)
            })
    }

    useEffect(() => {
        getMovieListData()

    }, [])

    return (

        <GlobalContext.Provider value={{ movieList, reviewList }} >
            {children}
        </GlobalContext.Provider>

    )

}

export { GlobalContext, GlobalProvider }