import "./App.css"
import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/productsPage.tsx";
import StartPage from "./pages/startPage.tsx";
import {UserBar} from "./components/UserBar.tsx";
import {Navi} from "./components/Navi.tsx";
import AddProductForm from "./components/AddNewProductForm.tsx";
import {filterStartValues, FilterValues} from "./components/Filter.tsx";
import {useState} from "react";

function App() {

    const [filterValues, setFilterValues] = useState<FilterValues>(filterStartValues)

    function filterFunction(filterValuesParam: FilterValues) {
        setFilterValues(filterValuesParam)
    }


    return (
        <>
            <h1>Warehouse-System</h1>
            <UserBar/>
            <Navi filterCallback={filterFunction} />
            <Routes>
                <Route path={"/"} element={<StartPage filterValues={filterValues}></StartPage>}/>
                <Route path={"product/:id"} element={<ProductsPage/>}/>
                <Route path={"/add"} element={<AddProductForm/>}/>
            </Routes>
        </>
    )
}

export default App