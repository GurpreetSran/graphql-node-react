const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;

mongoose.connect('mongodb://gsran:test123@ds151533.mlab.com:51533/gqldemo', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to db');
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('dist'));

// send the user to index html page inspite of the url
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
    console.log('Server running on ', port);
});