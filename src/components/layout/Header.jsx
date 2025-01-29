// import { useState, useEffect } from "react";
// import axios from "axios";

const Header = () => {

    // const [bookList, setBookList] = useState([]);
    // const [value, setValue] = useState("")
    // function getData() {
    //     axios.get(`http://localhost:3000/books`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setBookList(res.data.items);

    //         })
    //         .catch((err) => console.log(err))
    //         .finally("data fetch completed");
    // }

    // useEffect(getData, [])



    // function getValues(event) {
    //     setValue(event.target.value)

    // }

    // function changeBookList() {
    //     let filteredBooks
    //     bookList.filter((element) => {
    //         return filteredBooks = element.name.includes(value)
    //     })
    // }

    // function handleClick(e) {
    //     setBookList(changeBookList)

    //     window.location.reload();
    // }

    // console.log(value)

    return (
        <header>
            <nav className="navbar navbar-expand-lg h-100 p-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-between collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className="logo d-flex align-items-center">
                            <img src="src/public/sigil.png" alt="" />
                            <h2 className="text-white px-2">Libraries</h2>
                        </div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 white"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            // onChange={getValues}
                            />
                            <button className="btn bg-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;
