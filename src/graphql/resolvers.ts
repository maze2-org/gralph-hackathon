import {Event} from '../models/Event';
import {ResolvedAddress} from '../models/ResolvedAddress';

const rootValue = {
  getNames: async () => {
    return ResolvedAddress.find();
  },

  getAddress: async ({address}: { address: string }) => {
    return ResolvedAddress.find({address: address});
  },

  getAddressByName: async ({name}: { name: string }) => {
    return ResolvedAddress.findOne({name: name});
  },

  getNameByAddress: async ({address}: { address: string }) => {
    return ResolvedAddress.findOne({address: address});
  },

  getEvents: async () => {
    return Event.find();
  },

  getEventsByType: async ({eventType}: { eventType: string }) => {
    return Event.find({name: eventType});
  },

  getEventsByAddress: async ({address}: { address: string }) => {
    return Event.find({'fields.address': address});
  },

  getEventsByName: async ({name}: { name: string }) => {
    return Event.find({'fields.parsedName': name});
  }
};

export default rootValue;
