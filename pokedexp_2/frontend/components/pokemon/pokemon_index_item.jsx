import React from "react";
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    render() {
        return (
            <li className="pokemon-index-item">
                <Link to={`/pokemon/${this.props.poke.id}`}>
                    {this.props.poke.name}
                    <img src={this.props.poke.imageUrl}/>
                </Link>
            </li>
        )
    }
}


export default PokemonIndexItem;