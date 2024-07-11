const React = require('react');

const Home = () => (
    <html>
        <head><title>Pokemon App</title></head>
        <body>
            <h1>Welcome to our Pokemon App</h1>
            <br />
            <a href="/signUp">Sign Up for this app</a>
            <br />
            <a href="/logIn">Log In to your account on this app</a>
            <br />
            <a href="/allMons">See all the Pokemon in the database</a>
        </body>
    </html>
)

module.exports = Home;