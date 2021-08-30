import React from 'react';
import { withRouter } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
    return (
        <li>
            {props.pokemon.name}
            <img src= {props.pokemon.imageUrl} />
        </li>
    )
}