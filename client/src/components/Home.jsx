import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCharacters, filterCharactersByStatus, filterByCreateInDb} from "../actions";
import Card from "./Card";
import Paginado from './Paginado';

export default function Home() {
    const dispatch = useDispatch();
    const allCharacters = useSelector((state) => state.characters);
    const [currentPage, setCurrentPage] = useState(1);//inicia con la pag 1
    const [charactersPerPage, setCharactersPerPage] = useState(6); //personajes por pagina
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = allCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCharacters());
    }

    function handleFilterStatus(e){
        dispatch(filterCharactersByStatus(e.target.value))
    }

    function handlefilterByCreateInDb(e){
        dispatch(filterByCreateInDb(e.target.value))
    }

    return (
        <div>
            <Link to='/character'>Create a character</Link>
            <h1>Breaking Bad App</h1>
            <button onClick={e => { handleClick(e) }}>Reload all characters</button>
            <div>
                <select>
                    <option value='asc'>Ascending order</option>
                    <option value='desc'>Descending order</option>
                </select>
                <select onChange={e => handleFilterStatus(e)}>
                    <option value='All'>All</option>
                    <option value='Alive'>Alive</option>
                    <option value='Deceased'>Deceased</option>
                    <option value='Presumed dead'>Presumed dead</option>
                    <option value='Unknown'>Unknown</option>
                </select>
                <select onChange={e => handlefilterByCreateInDb(e)}>
                    <option value='all'>All</option>
                    <option value='created'>Created</option>
                    <option value='existing'>Existing</option>
                </select>
            </div>
            <Paginado 
                charactersPerPage={charactersPerPage}
                allCharacters={allCharacters.length}
                paged={paged}
            />
            <div>
                {
                    currentCharacters?.map((el) => {
                        return (
                            <div key={el.id}>
                                <Link to={"/home/" + el.id}>
                                    <Card name={el.name} image={el.img} nickname={el.nickname} key={el.id} />
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}