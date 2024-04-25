import "./App.css"
import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/productsPage.tsx";
import StartPage from "./pages/startPage.tsx";


export type Product = {
    id: number,
    productId: string,
    name: string,
    category: string,
    quantity: number,
    status: string

}

function App() {

    return (

        <>
            <h1>Warehouse-System</h1>
            <Routes>
                <Route path={"/"} element={<StartPage />} />
                <Route path={"product/:id"} element={<ProductsPage />} />
            </Routes>


        </>
    )
}

export default App