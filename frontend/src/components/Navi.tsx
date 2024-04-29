import {Link, NavLink} from "react-router-dom";
import './Navi.css';
import {Filter, FilterValues} from "./Filter.tsx";

export function Navi(): JSX.Element {

    function myFilterCallback(filterValues: FilterValues) {
        console.log("Callback: " + filterValues.text + " - " + filterValues.category);
    }

    return <nav className="navbar">
        <div>
            <Link to={"/"} className="navbar-title">Warehouse System</Link>
        </div>

        <div>
            <ul className={"navbar-items"}>
                <li className="nav-item">
                    <NavLink to={"/"}>Produktliste</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/add"}>Produkt hinzufügen</NavLink>
                </li>
                <li className="nav-item filter-item">
                    <Filter callback={myFilterCallback} />
                </li>
            </ul>


        </div>


    </nav>
}