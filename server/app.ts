import { createServer } from "http";
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { fbAdmin } from "./core/firebase.admin";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.post("/api/registartion", async (req: Request, res: Response) => {
  try {
    const createAuthUser = await fbAdmin.auth().createUser(req.body);

    fbAdmin.database().ref("users").push(req.body);

    res
      .status(200)
      .send({ uid: createAuthUser.uid, email: createAuthUser.email });
  } catch (error) {
    res.status(400).send(error);
  }
});

const httpServer = createServer(app);

httpServer.listen(5000);
