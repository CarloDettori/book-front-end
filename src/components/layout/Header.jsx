import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Header = () => {

    const { setBookListOriginal, fakeBooksList } = useContext(GlobalContext);
    const [searchValue, setSearchValue] = useState("");

    function valueSearch(event) {
        setSearchValue(event.target.value);
    }

    function filtring() {

        if (searchValue == "") {
            setBookListOriginal(fakeBooksList)
        } else {
            const filteredBooks = fakeBooksList.filter((book) =>
                book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                book.author.toLowerCase().includes(searchValue.toLowerCase())
            );
            setBookListOriginal(filteredBooks)
        }

    }

    useEffect(filtring, [valueSearch])






    return (
        <header>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <div className="justify-content-between collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className="logo d-flex align-items-center">
                            <img src="src/public/images/sigil.png" alt="" />
                            <h2 className="text-white px-2">Libraries</h2>
                        </div>
                        <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault() }}>
                            <input
                                className="form-control me-2 white"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchValue}
                                onChange={valueSearch} // Corretto l'onChange
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
