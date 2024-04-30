import {ChangeEvent} from "react";

type QuantityStatusProps = {
    status: string,
    onChange: (event:ChangeEvent<HTMLSelectElement>) => void
}

export default function QuantityStatus({ onChange, status }: QuantityStatusProps) {
    return (
        <div className="select-container">
            <select className="select-status" onChange={onChange} value={status}>
                <option value={"All"}>All</option>
                <option value={"minimum"}>over50Units</option>
                <option value={"Null"}>NullUnits</option>
                <option value={"unknown"}>Unknown</option>
            </select>
            <div className="select-arrow"></div>
        </div>
    );
}