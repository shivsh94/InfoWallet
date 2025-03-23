import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
dotenv.config()
import cors from 'cors'
import router from './router/index.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CLIENT_URL, 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

const PORT= process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
connectDB();

app.use('/', router)
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`  )
    });