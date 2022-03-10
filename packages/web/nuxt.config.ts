import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        "nuxt-socket-io"
    ],
    io: {
        server: {
            cors: {
                credentials: true,
                origin: ['http://localhost:8000', 'http://localhost:3000', 'http://localhost:8080'] // Array of whitelisted origin(s)
            }
        },
        sockets: [{
            name: "main",
            url: "http://localhost:8000"
        }]
    }
})
