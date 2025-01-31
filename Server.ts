import express from 'express';
import cors from 'cors';
import FieldRouter from "./Router/FieldRouter";

const app = express();
app.use(express.json())
app.use(cors())

app.use('/field',FieldRouter)
app.listen(8080,()=>{
    console.log("Server running on port 8080")
})