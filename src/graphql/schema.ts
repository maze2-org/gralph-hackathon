import {buildSchema} from 'graphql';

const schema = buildSchema(`
  type Field {
    address: String!
    parsedName: String!
    name: String,
    newName: String
  }
  
  type Event {
    contractAddress: String!
    blockHash: String!
    txId: String!
    eventIndex: Int!
    name: String!
    fields: Field
    createdAt: String!
  }
  
  type Name {
    name: String!
    address: String
    addressGroup: Int
  }

  type Query {
    getEvents: [Event]
    getEventsByType(eventType: String!): [Event]
    getEventsByAddress(address: String!): [Event]
    getEventsByName(name: String!): [Event]
    
    getNames: [Name]
    getAddressByName(name: String!): Name
    getNameByAddress(address: String!): Name
  }
`);

export default schema;
