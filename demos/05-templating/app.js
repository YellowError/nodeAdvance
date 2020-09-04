const express = require('express');
const app = express();
const engine = require('express-hbs');
const morgan = require('morgan');
const router = require('./app.router');

app.engine('hbs',engine.express4({
    partialsDir: `${process.cwd()}/views/partials`,
    defaultLayout : `${process.cwd()}/views/layouts/default.hbs`
}))

app.set('view engine', 'hbs');

app.use(morgan('combined'))

app.use(router)


app.listen(8001);