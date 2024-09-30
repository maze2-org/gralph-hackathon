import mongoose from 'mongoose';

export type EventType = 'ReverseAddressSet' | 'ReverseAddressDeleted'

export type Event = {
  id: string;
  contractAddress: string;
  blockHash: string;
  txId: string;
  eventIndex: number;
  name: string;
  fields: {
    address: string;
    parsedName: string;
    newName?: string;
    name?: string;
  }
  createdAt: string;
}

const eventSchema = new mongoose.Schema({
  contractAddress: {type: String, required: true},
  blockHash: {type: String, required: true},
  txId: {type: String, required: true, unique: true},
  eventIndex: {type: Number, required: true},
  name: {type: String, required: true},
  fields: {type: Object, required: true},
});

export const Event = mongoose.model('Event', eventSchema);

export const storeEvent = async (eventData: Omit<Event, 'id' | 'createdAt'>) => {
  const event = new Event({
    ...eventData,
    createdAt: new Date()
  });

  try {
    await event.save();
    console.log(`✅ Successfully saved event: ${eventData.blockHash}`);
  } catch (error: any) {
    if (error["code"] === 11000) {
      console.error(`✅ Event: already exists`);
    } else {
      console.error(`❌ Error saving event: ${event.eventIndex}`, error);
    }
  }
};
