const React = require('react');
const HtmlSkeleton = require('./HtmlSkeleton');
const Link = require('./Link');

const OneMon = (props) => {
    return (
        <HtmlSkeleton title={`Pokemon App - ${props.pokemon.Name}`}>
           <Link href="/allMons" text="Back to all Pokemon" />
           <h1>PokeDexNo: {props.pokemon.PokedexNo}</h1>
           <h2>Name: {props.pokemon.Name}</h2>
           <h3>Type: {props.pokemon.Type}</h3>
           <h3>Moves:</h3>
           <ul>
                {props.pokemon.Moves.map((move) => <li key={move}>{move}</li>)}
           </ul>
           <Link href={`/updateMon/${props.pokemon.Name}`} text="Update this pokemon" />
        </HtmlSkeleton>
    )
}

module.exports = OneMon;