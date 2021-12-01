import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCharacters } from "../actions";
import Card from "./Card";

export default function Home() {
    const dispatch = useDispatch();
    const allCharacters = useSelector((state) => state.characters);

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCharacters());
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
                <select>
                    <option value='All'>All status</option>
                    <option value='Alive'>Alive</option>
                    <option value='Deceased'>Deceased</option>
                    <option value='Presumed dead'>Presumed dead</option>
                    <option value='Unknown'>Unknown</option>
                </select>
                <select>
                    <option value='all'>All</option>
                    <option value='created'>Created</option>
                    <option value='existing'>Existing</option>
                </select>
            </div>
            <div>
                {
                    allCharacters?.map((el) => {
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