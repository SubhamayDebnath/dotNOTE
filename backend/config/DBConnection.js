import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const DBConnection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
    if (connection) {
      console.log(`Connected to mongoDB ${connection.host}`);
    }
  } catch (error) {
    console.log(`DATABASE ERROR : ${error}`);
    process.exit(1);
  }
};

export default DBConnection;
