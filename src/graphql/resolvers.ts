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
};

export default rootValue;
