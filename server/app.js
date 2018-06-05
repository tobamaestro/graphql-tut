const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://toba:test123@ds147450.mlab.com:47450/graphql-playlist-tut');
mongoose.connection.once('open', () => {
    console.log('connected to mLab');
});

app.use('/graphql', graphqlHTTP({
    schema,  //  schema: schema ES6 shortcut,
    graphiql: true 
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000...');
});