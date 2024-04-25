import {Link, NavLink} from "react-router-dom";
import './Navi.css';

export function Navi(): JSX.Element {
    return <nav className="navbar">
        <div> User - Login </div>

        <div>
            <Link to={"/"} className="navbar-title">Warehouse System</Link>
        </div>

        <div>
            <ul className={"navbar-items"}>
                <li className="nav-item">
                    <NavLink to={"/"}>All Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/suchen"}>Product Suchen</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/add"}>Add Product</NavLink>
                </li>

            </ul>


        </div>


    </nav>
}