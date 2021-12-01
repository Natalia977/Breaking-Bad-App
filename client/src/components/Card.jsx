import React from "react";

export default function Card({name, nickname, image}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{nickname}</h5>
            <img src={image} alt="Not found" width="200px" height="250px" />
        </div>
    )
}