// import './Navbar.scss';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-shadow navbar-light bg-body">
            <div className="container">
                <div className="brand-name">
                    <i className="brand-icon fa-solid fa-share-from-square me-2"></i>
                    <NavLink to="/" style={{ textDecoration: "none" }}> <span className="brand-title">MAX-PREVIEW</span></NavLink>
                </div>
                <a className="btn btn-gradient" href="http://github.com/MAX-EINSTEIN/max-link-previewer/" target='blank'>  <i className="fa-brands fa-github"></i>&nbsp; GitHub</a>
            </div>
        </nav>
    );
};

export default Navbar;