const express = require('express');
const graphqlHTTP = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const { queryType } = require('./query')

const app = express();

const schema = new GraphQLSchema({ query: queryType })

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(5000);
console.log(`Server Running at localhost:${5000}`);
