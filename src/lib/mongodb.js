import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) throw new Error("Please set MONGODB_URI in .env.local");

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {});
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getDb() {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db;
}

export default clientPromise;
