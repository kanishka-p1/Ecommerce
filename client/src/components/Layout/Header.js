// eslint-disable-next-line
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hook/useCategory";
import { useCart } from "../../context/cart";
import "../../styles/HeaderStyles.css";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const categories = useCategory();
    const [cart] = useCart();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand"> Ecommerce App</Link>
                    <ul className="navbar-nav ml-auto mb-lg-0">
                        <li className="nav-item pr-5 mr-5"><SearchInput /></li>
                        <li className="nav-item ml-5">
                            <NavLink to="/" className="nav-link">Home </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to={"/categories"}
                                data-bs-toggle="dropdown"
                            >
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to={"/categories"}>
                                        All Categories
                                    </Link>
                                </li>
                                {categories?.map((c) => (
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to={`/category/${c.slug}`}
                                        >
                                            {c.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/* <li ClassName="nav-item">
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </li>
                        <li ClassName="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li> */}

                        {!auth?.user ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link">
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <div>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                            {auth?.user?.name}
                                        </NavLink>
                                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                            <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="nav-link dropdown-item" href="#">Dashboard</NavLink></li>
                                            <li><NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink></li>
                                        </div>
                                    </li>
                                    {/* <li className="nav-item">
                                    </li> */ }
                                </div>
                            </>
                        )}
                        <li ClassName="nav-item">
                            <NavLink to="/cart" className="nav-link">Cart({cart?.length})</NavLink>
                        </li>
                    </ul >
                </div >
            </nav >

        </>
    )
}

export default Header
