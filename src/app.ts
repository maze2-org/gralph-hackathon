import dotenv from "dotenv";
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './graphql/schema';
import rootValue from './graphql/resolvers';
import {connectToMongo} from "./db/connect";

dotenv.config();

const app = express();

// Connect to MongoDB
connectToMongo().catch()

// GraphQL middleware for handling queries
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

export default app;
