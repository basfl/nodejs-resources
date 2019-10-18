const express = require("express");
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const app = express();

app.use("/graphql", graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver

}))

app.listen(8080);