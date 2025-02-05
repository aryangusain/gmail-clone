import express from 'express'
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js';
import emailRoute from './routes/email.route.js';
import cors from 'cors';

dotenv.config({});
connectDB();

const app = express();
const PORT = 3000;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOptions));

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})