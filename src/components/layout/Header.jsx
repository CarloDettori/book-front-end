const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg h-100 p-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-between collapse navbar-collapse" id="navbarTogglerDemo03">
                    <h2 className="text-white">FILMS</h2>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn bg-white" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
