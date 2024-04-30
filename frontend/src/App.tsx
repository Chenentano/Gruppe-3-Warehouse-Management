import "./App.css"
import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/productsPage.tsx";
import StartPage from "./pages/startPage.tsx";
import {UserBar} from "./components/UserBar.tsx";
import {Navi} from "./components/Navi.tsx";
import AddProductForm from "./components/AddNewProductForm.tsx";

function App() {

    return (
        <>
            <h1>Warehouse-System</h1>
            <UserBar/>
            <Navi/>
            <Routes>
                <Route path={"/"} element={<StartPage/>}/>
                <Route path={"product/:id"} element={<ProductsPage/>}/>
                <Route path={"/add"} element={<AddProductForm/>}/>
            </Routes>
        </>
    )
}

export default App