import { useState } from "react";          // Importiamo use state da react ( Hook Function )
import { Link } from "react-router-dom";  // Importiamo Link da react-router-dom per permettere la navigazione tra le rotte 

export const SidebarComponent = () => {

    const [active, setActive] = useState(null)
    function takeId(e) {
        setActive(e.target.id)
    }


    return (

        <div id="sideBar" className="d-flex flex-column flex-shrink-0 p-3">
            <ul className="nav nav-pills flex-column mb-auto">

                {/* Primo Button */}
                <li>
                    <Link
                        to={"/"}
                        id="bottone1"
                        onClick={takeId}
                        className={` ${active === "bottone1" ? "active" : ""} nav-link text-white`}
                        aria-current="page">
                        <i className="bi bi-house me-2"></i>Home
                    </Link>
                </li>

                {/* Second Button */}
                <li>
                    <Link
                        to={"/about"}
                        id="bottone3"
                        onClick={takeId}
                        className={` ${active === "bottone3" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-card-checklist me-2"></i>About Us
                    </Link>
                </li>

                {/* Terzo Button */}
                <li>
                    <Link
                        to={"/contact"}
                        id="bottone5"
                        onClick={takeId}
                        className={` ${active === "bottone5" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-people me-2"></i>Contacts
                    </Link>
                </li>

                {/* Quarto Button */}
                <li>
                    <Link
                        id="bottone2"
                        onClick={takeId}
                        className={` ${active === "bottone2" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-speedometer2 me-2"></i>Dashboard
                    </Link>
                </li>

                {/* Quinto Button  */}
                <li>
                    <Link
                        id="bottone4"
                        onClick={takeId}
                        className={` ${active === "bottone4" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-grid me-2"></i>Products
                    </Link>
                </li>

            </ul>
        </div>

    );
};
