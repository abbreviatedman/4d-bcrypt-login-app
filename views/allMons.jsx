const React = require('react');

const HtmlSkeleton = require('./HtmlSkeleton');
const Link = require('./Link');

const AllMons = (props) => {
    return (
        <HtmlSkeleton title="Pokemons List">
            <Link href="/" text="Back home" />
            <br />
            <Link href="/createOneMon" text="Create a new pokemon" />
            {props.pokemon.map((mon) => (
                <div key={mon._id}>
                    <h1>Pokedex No: {mon.PokedexNo}</h1>
                    <h2>Name: <Link href={`/oneMon/${mon.Name}`} text={mon.Name} /></h2>
                </div>
            ))}
        </HtmlSkeleton>
    )
}

module.exports = AllMons;