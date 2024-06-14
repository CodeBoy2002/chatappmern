import path from "path"
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'

const PORT = process.env.PORT || 5000


//This is used while deploying the application.
const __dirname = path.resolve()

dotenv.config() 

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

//During application deploying
app.use(express.static(path.join(__dirname, "/CLIENT/dist")))

//During application deploying
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "CLIENT", "dist", "index.html"))
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server listening on port ${PORT}`);
})