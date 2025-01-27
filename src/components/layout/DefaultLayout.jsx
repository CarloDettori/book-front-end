import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { SidebarComponent } from "../common/SidebarComponent";
export default function DefaultLayout() {
    return (<>
        <Header />
        <div className="d-flex">
            <SidebarComponent />
            <main>
                <Outlet />
            </main>
        </div>
        <Footer />
    </>
    )
}