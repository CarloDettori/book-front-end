import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { SidebarComponent } from "../common/SidebarComponent";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className="d-flex">
                <SidebarComponent />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout