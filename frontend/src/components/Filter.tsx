import {ChangeEvent, useEffect, useState} from "react";

export type FilterValues = {
    text: string,
    category: string
}

type FilterProps = {
    callback: (filterValues: FilterValues) => void
}

const filterStartValues: FilterValues = {
    text:"",
    category:"name"
}

export function Filter(props: FilterProps) {
    const [filterValues, setFilterValues] = useState<FilterValues>(filterStartValues)

    useEffect(() => props.callback(filterValues), [filterValues])

    function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setFilterValues({text:event.target.value, category:filterValues.category});
        console.log("Input changed: " + filterValues.text + " - " + filterValues.category);
        props.callback(filterValues);
    }

    function handleOnSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setFilterValues({text:filterValues.text, category:event.target.value});
        console.log("Select changed: " + filterValues.text + " - " + filterValues.category);
        props.callback(filterValues);
    }

    return (<>
        <div className="filter-items">
            <input className="filter-input" type="search" placeholder="Search" onChange={handleOnChangeInput} value={filterValues.text}/>
            <select className="filter-category-select" onChange={handleOnSelectChange} value={filterValues.category}>
                <option value="productId">ProductId</option>
                <option value="name">Name</option>
                <option value="category">Kategorie</option>
                <option value="quantity">Menge</option>
            </select>
        </div>
    </>)
}