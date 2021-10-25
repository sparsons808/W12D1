import React from "react";

class PokemonIndexItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.poke.name}
                <img src={this.props.poke.imageUrl}/>
            </li>
        )
    }
}


export default PokemonIndexItem;