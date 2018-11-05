const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://gsran:test123@ds151533.mlab.com:51533/gqldemo', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to db');
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server running on 4000');
});