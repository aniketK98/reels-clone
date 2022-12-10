import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import schema from "./dbSchema.js";

//app config

const appConfig = express();
const port = process.env.PORT || 8002;
const connectionString =
  "mongodb+srv://admin:1zcQDQF1TsqVUedm@cluster0.ejfqoiv.mongodb.net/?retryWrites=true&w=majority";

//dbconfig
mongoose.connect(connectionString);

//middleware
appConfig.use(express.json());
appConfig.use(cors());

//API endpoints
appConfig.get("/", (req, res) => res.status(200).send("dgsakjfg"));

appConfig.post("/videos", (req, res) => {
  const dbSchema = req.body;
  schema.create(dbSchema, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

appConfig.get("/videos", (req, res) => {
  schema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//listner
appConfig.listen(port, () => console.log(`listening on ${port}`));
