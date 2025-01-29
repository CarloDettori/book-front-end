import { useState } from "react";
import { Link } from "react-router-dom";

export const SidebarComponent = () => {
    const [active, setActive] = useState(null);

    const menuItems = [
        { id: "bottone1", to: "/", icon: "bi-house", label: "Home" },
        { id: "bottone3", to: "/about", icon: "bi-card-checklist", label: "About Us" },
        { id: "bottone5", to: "/contact", icon: "bi-people", label: "Contacts" },
        { id: "bottone2", to: "#", icon: "bi-speedometer2", label: "Dashboard" },
        { id: "bottone4", to: "#", icon: "bi-grid", label: "Products" }
    ];

    return (
        <div id="sideBar" className="d-flex flex-column flex-shrink-0 p-3">
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.to}
                            id={item.id}
                            onClick={() => setActive(item.id)}
                            className={`nav-link text-white ${active === item.id ? "active" : ""}`}
                        >
                            <i className={`bi ${item.icon} me-2`}></i>{item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
