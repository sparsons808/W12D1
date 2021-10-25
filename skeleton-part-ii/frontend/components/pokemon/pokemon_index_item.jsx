import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

export const PokemonIndexItem = (props) => {
    return (
        <li className = "pokemon-index-item">
            <Link to= {`/pokemon/${props.pokemon.id}`}>
                <img src= {props.pokemon.imageUrl} />
                {props.pokemon.name}
            </Link>
        </li>
    )
}

