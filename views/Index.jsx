const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class MyFirstComponent extends React.Component {
    render() {
        const { pokemons } = this.props
        return (
            <div>
                <h1>Pokemon found while on a Adventure!</h1>
                <ul>
                    {pokemons.map((pokemon, i) => {
                        return <li><a href={`/pokemon/${i}`}>{pokemon.name[0].toUpperCase(0) + pokemon.name.slice(1)}</a></li>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = MyFirstComponent