import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
// importing routes
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";

dotenv.config()
const app = express()

// Middlewares
app.use(express.json()); // this tags the json that was sent unto the req, so req.body
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);



const port = process.env.PORT || 5501
app.listen(port,()=>{
    console.log("Connnected to backend.")
})


// const connect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("Connnected to MongoDB!")
//     } catch (error) {
//         throw(error);
//     }
// }
// mongoose.connection.on("connected", () =>{ 
//     console.log("MongoDB is connnected.")
// })