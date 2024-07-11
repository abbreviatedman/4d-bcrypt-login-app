const React = require('react');

const HtmlSkeleton = require('./HtmlSkeleton');
const Link = require('./Link');

const Home = () => {
    return (
        <HtmlSkeleton title="Pokemon App">
            <h1>Welcome to our Pokemon App</h1>
            <br />
            <br />
            <Link href="/signUp" text="Sign up for this app" />
            <br />
            <br />
            <Link href="/logIn" text = "Log in to your account" />
            <br />
            <br />
            <Link href="/allMons" text="See all the pokemons" />
        </HtmlSkeleton>
    )
}

module.exports = Home;