import "./App.css"
import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/productsPage.tsx";
import StartPage from "./pages/startPage.tsx";
import {UserBar} from "./components/UserBar.tsx";
import {Navi} from "./components/Navi.tsx";
import EditProductCard from "./components/EditProductCard.tsx";
import AddNewProductForm from "./components/AddNewProductForm.tsx";
import {filterStartValues, FilterValues} from "./components/Filter.tsx";
import {useState} from "react";


function App() {
//    const [filterText, setFilterText] = useState<string>("");
//    const [filterCategory, setFilterCategory] = useState<string>("name");
    const [appFilterValues, setAppFilterValues] = useState<FilterValues>(filterStartValues);

    //FilterFunction = (filterValues: FilterValues) => void;
    function filterValueCallback(filterValues: FilterValues): void {
        setAppFilterValues(filterValues);
        console.log("filterValueCallback: " + filterValues.text + " / " + filterValues.category);
    }

    return (
        <>
            <h1>Warehouse-System</h1>
            <UserBar/>
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