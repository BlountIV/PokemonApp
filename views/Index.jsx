const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        
        return (
            <div style={myStyle}>
                <h1>Pokemon found while on a Adventure!</h1>
                <ul>
                    {pokemon.map((pokemon, i) => {
                        return <li><a href={`/pokemon/${i}`}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</a></li>
                    })}
                </ul>


            </div>
        )
    }
}

module.exports = Index