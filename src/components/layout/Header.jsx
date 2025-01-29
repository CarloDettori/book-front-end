import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext"

const Header = () => {

    const { searchQuery, setSearchQuery } = useContext(GlobalContext);
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);  
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg  p-3">
                <div className="container-fluid">
                    <div className=" justify-content-between collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className="logo d-flex align-items-center">
                            <img src="src/public/images/sigil.png" alt="" />
                            <h2 className="text-white px-2">Libraries</h2>
                        </div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 white"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </header >
    )
};

export default Header;
