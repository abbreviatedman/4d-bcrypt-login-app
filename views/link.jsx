const React = require('react');

const Link = (props) => {
    return (
        <a href={props.href} class="btn btn-info">{props.text}</a>
    )
}

module.exports = Link;