import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

export const PokemonIndexItem = (props) => {
    return (
        <li className = "pokemon-index-item">
            {props.pokemon.name}
            <img src= {props.pokemon.imageUrl} />
        </li>
    )
}