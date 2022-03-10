import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import { port } from "./config"

import { generateWord } from "./controller/WordGenerator"

const app = express();
const usedPort = port || 8080
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
})

app.get("/", (req, res) => {
    res.send("Hemwoo world!");
})

app.listen(usedPort, () => {
    console.log(`Serves listened on port ${usedPort}!`);
})

io.on("connection", (socket) => {
    console.log(`Client with id ${socket.id} connected!`);
    socket.on("request_data", () => {
        socket.emit("random_data", generateWord())
    })
})

httpServer.listen(8000);
