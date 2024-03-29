import mongoose from "mongoose";

// Improved connection configuration with defaults
const MONGO_URI = process.env.MONGODB_URI as string;
const DB_NAME = "computer_store"; // Optional default database name
const BUFFER_COMMANDS = false; // Optional default for performance optimization
const CONNECT_TIMEOUT_MS = 30000; // Optional default timeout

const getConnectionOptions = (): mongoose.ConnectOptions => ({
  dbName: DB_NAME,
  bufferCommands: BUFFER_COMMANDS,
  connectTimeoutMS: CONNECT_TIMEOUT_MS,
});

// Improved caching using WeakMap for garbage collection
const cachedConnection = new WeakMap();

const dbConnect = async (): Promise<mongoose.Mongoose> => {
  let connection = cachedConnection.get(mongoose);

  if (!connection) {
    try {
      const options = getConnectionOptions();
      connection = await mongoose.connect(MONGO_URI, options);
      cachedConnection.set(mongoose, connection);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error; // Re-throw for better error handling
    }
  }

  return connection;
};

export default dbConnect;
