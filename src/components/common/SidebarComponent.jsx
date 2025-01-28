import { useState } from "react";
import { Link } from "react-router-dom";

export const SidebarComponent = () => {

    const [active, setActive] = useState(null)
    function takeId(e) {
        setActive(e.target.id)
    }


    return (

        <div id="sideBar" className="d-flex flex-column flex-shrink-0 p-3">
            <ul className="nav nav-pills flex-column mb-auto">

                <li>       {/* Primo pulsante */}
                    <Link
                        to={"/"}
                        id="bottone1"
                        onClick={takeId}
                        className={` ${active === "bottone1" ? "active" : ""} nav-link text-white`}
                        aria-current="page">
                        <i className="bi bi-house me-2"></i>Home
                    </Link>
                </li>

                <li>       {/* Secondo pulsante */}
                    <Link
                        to={"/about"}
                        id="bottone3"
                        onClick={takeId}
                        className={` ${active === "bottone3" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-card-checklist me-2"></i>About Us
                    </Link>
                </li>

                <li>       {/* Terzo pulsante */}
                    <Link
                        to={"/contact"}
                        id="bottone5"
                        onClick={takeId}
                        className={` ${active === "bottone5" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-people me-2"></i>Contacts
                    </Link>
                </li>

                <li>       {/* Quarto pulsante */}
                    <Link
                        id="bottone2"
                        onClick={takeId}
                        className={` ${active === "bottone2" ? "active" : ""} nav-link text-white`}>
                        <i className="bi bi-speedometer2 me-2"></i>Dashboard
                    </Link>
                </li>

                <li>       {/* Quinto pulsante */}
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
