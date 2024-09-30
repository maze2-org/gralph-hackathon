import dotenv from 'dotenv';
import {Command} from 'commander';
import {
  web3,
  hexToString,
  groupOfAddress,
  addressFromContractId,
} from '@alephium/web3';

import {connectToMongo} from "../db/connect";
import {storeEvent} from "../models/Event";
import {ReverseNameResolverInstance} from '../artifacts/ts';
import {deleteResolvedAddress, storeResolvedAddress} from '../models/ResolvedAddress';

dotenv.config();

const API_KEY = process.env.API_KEY;
const NODE_URL = process.env.NODE_URL || 'http://127.0.0.1:12973';

web3.setCurrentNodeProvider(NODE_URL)

const REVERSE_NAME_RESOLVERS: string[] = [
  '6c7075ed4c407c4e20ae39341820240a4065fe69c3840960d2ee2633daf8b000',
  '40be2751efbf30395c079278972fbe6838f53a6e240f7b30ebfe877b7dddcd01',
  'cff6d6016d3160fd5818d92effa79594a4dceec572895d953f1a76f0163ff902',
  '5777c6381f8dd67297793a4eb6d1e8a1f0de545f5fa4e129d25f4f08d382bd03',
];

// Main function to execute the command
async function command() {
  console.log('API_KEY', API_KEY)
  console.log('NODE_URL', NODE_URL)
  await connectToMongo();

  for (let group = 0; group < REVERSE_NAME_RESOLVERS.length; group++) {
    const reverseNameResolverContractId = REVERSE_NAME_RESOLVERS[group]
    const reverseNameResolver = new ReverseNameResolverInstance(addressFromContractId(reverseNameResolverContractId))


    console.log(`Listen to contract ${reverseNameResolver.address} on group ${group}`);

    reverseNameResolver.subscribeReverseAddressSetEvent({
      messageCallback: async (message) => {
        console.log("New address set", message);
        await storeEvent(message);
        await storeResolvedAddress({
          name: hexToString(message?.fields?.newName),
          address: message.fields.address,
          addressGroup: groupOfAddress(message.fields.address)
        })
      },
      errorCallback: (error) => {
        console.log("Error", error);
      },
      pollingInterval: 1000
    })

    reverseNameResolver.subscribeReverseAddressDeletedEvent({
      messageCallback: async (message) => {
        console.log("Reverse address deleted", message);
        await storeEvent(message);
        await deleteResolvedAddress(message.fields.address);
      },
      errorCallback: (error) => {
        console.log("Error", error);
      },
      pollingInterval: 1000
    })
  }
}

// Execute the command with the parameter from the command line
const program = new Command();
program
  .command('fetchBlocks')
  .action(async () => {
    await command();
  });

program.parse(process.argv);

// Example
// {
//   name: 'deadrare',
//   address: '1B6TvrNuv4aCMEUYncJaC5maPh8Qjw9hsh9wCrBFxTRPE',
//   capitalisation: 'Deadrare',
//   expires: 1751650132718n
// }

