const { io } = require("socket.io-client");

const ioClient = io("http://localhost:8000");

ioClient.on("connect", () => {
    const engine = ioClient.io.engine
    engine.on("packet", (a) => {
        console.log(a)
    })
    console.log(ioClient.id)
})
