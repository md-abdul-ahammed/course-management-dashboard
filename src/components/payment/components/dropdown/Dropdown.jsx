import React from "react";

export function Dropdown({name, children, onClick, className}) {
    return (
        <select onClick={onClick} name={name} className={className}>
            {children}
        </select>
    )
}

export function Option({children, selected, className}) {
    return (
        <option  selected={selected} className={className}>
            {children}
        </option>
    )
}