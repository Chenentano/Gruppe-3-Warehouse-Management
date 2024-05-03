import "./App.css"
import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/productsPage.tsx";
import StartPage from "./pages/startPage.tsx";
import {UserBar} from "./components/UserBar.tsx";
import {Navi} from "./components/Navi.tsx";
import EditProductCard from "./components/EditProductCard.tsx";
import AddNewProductForm from "./components/AddNewProductForm.tsx";
import {filterStartValues, FilterValues} from "./components/Filter.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [appFilterValues, setAppFilterValues] = useState<FilterValues>(filterStartValues);

    function filterValueCallback(filterValues: FilterValues): void {
        setAppFilterValues(filterValues);
        console.log("filterValueCallback: " + filterValues.text + " / " + filterValues.category);
    }

    const[user, setUser] = useState<string>("DEFAULT")

    useEffect(() =>
            getMe()
        , [user])

    function login(){
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080': window.location.origin;
        console.log("login: host is " + host);
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    function logout(){
        axios.get("/api/user/logout")
            .then(() => getMe())
    }

    function getMe(){
        axios.get("/api/user/me")
            .then(response => {
                setUser(response.data)
            })
    }

    return (
        <>
            <h1>Warehouse-System</h1>
            <UserBar loginFunction={login} logoutFunction={logout} />
            <Navi filterCallback={filterValueCallback}/>
            <Routes>
                <Route path={"/"} element={<StartPage filterValues={appFilterValues}/>} />
                <Route path={"product/:id"} element={<ProductsPage />} />
                <Route path={"/add"} element={<AddNewProductForm />} />
                <Route path={"/edit"} element={<EditProductCard/>}/>
            </Routes>
        </>
    )
}

export default App