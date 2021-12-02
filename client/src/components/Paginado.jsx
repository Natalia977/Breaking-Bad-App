import React from "react";

export default function Paginado({ charactersPerPage, allCharacters, paged }) {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(allCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paged(number)}>{number}</a>
                        </li>
                    ))}
            </ul>
        </nav>
    )


}