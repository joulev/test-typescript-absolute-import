import express from "express";
import echoFunc from "@/lib/echoFunc";

const app = express();
const port = 8080;

app.get("/", (_, res) => res.send(echoFunc()));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
