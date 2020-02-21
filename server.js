const express = require('express');
const cors = require('cors');

const server = express();

const port = 32114 || process.env.PORT;

const middleWare = (req, _res, next) => {
    console.log(`Incoming request to ${req.originalUrl}`);
    next();
}
server.use(middleWare);

const dataset = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
];

server.get('/color/:color', (req, res, next) => {
    if (req.body.color !== 'undefined' && req.body.color !== '') {
        const colorVal = dataset.filter((element) => {
            return element.color === req.body.color;
        });
        if (colorVal !== []) {
            res.end(colorVal);
        }
        else {
            res.end("Color not found");
        }
    }
    res.end("Okay...");
});

server.listen(port, (error) => {
    if (error) {
        console.error('Uh oh: ', error);
        return;
    }
    console.log(`Server is listening on port ${port}`);
})
