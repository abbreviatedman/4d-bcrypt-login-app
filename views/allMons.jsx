const React = require('react')

const AllMons = (props) => {
    return (
        <div>
            <a href="/">Back to the homepage</a>
            <br />
            <a href="/createOneMon">Create a new Pokemon</a>
            {props.pokemons.map((mon) => (
                <div key={mon._id}>
                    <h1>Pokedex No. {mon.PokedexNo}</h1>
                    <h2>Name: <a href={`/oneMon/${mon.Name}`}>{mon.Name}</a></h2>
                </div>
            ))}
            <br />
        </div>
    )
}

module.exports = AllMons;