const React = require('react');

const HtmlSkeleton = (props) => {
    return (
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
                <title>{props.title}</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = HtmlSkeleton;