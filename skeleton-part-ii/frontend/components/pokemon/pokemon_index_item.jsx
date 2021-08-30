import React from 'react';
import { withRouter } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.image_url}</li>
        </ul>
        
    )

}