import express from "express"
import { MongoClient } from 'mongodb';
import 'dotenv/config'
const app = express()
const port = 5000;



const client = new MongoClient(process.env.MONGODB);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call function
connectToMongoDB();

//Get Method
app.get('/', (req, res) => {
    res.send({ message: `Hello World!` })
})







// Server listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})