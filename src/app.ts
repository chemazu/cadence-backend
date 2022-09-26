import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import root from "./graphql/resolvers/index";
import schema from "./graphql/schema/index";

const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());



config();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
