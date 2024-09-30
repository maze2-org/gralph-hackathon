// @ts-ignore
import {ruruHTML} from "ruru/server";
import dotenv from "dotenv";
import express from 'express';

import schema from './graphql/schema';
import rootValue from "./graphql/resolvers";
import {createHandler} from 'graphql-http/lib/use/express';
import {connectToMongo} from "./db/connect";

dotenv.config();

const app = express();

// Connect to MongoDB
connectToMongo().catch()

app.get('/', (req, res) => {
  res.redirect(301, '/graphql');
});

app.get("/graphql", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({endpoint: "/graphql"}))
})

app.all('/graphql', createHandler({schema, rootValue}));

export default app;
