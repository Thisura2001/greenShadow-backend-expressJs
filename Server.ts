import express from 'express';
import cors from 'cors';
import FieldRouter from "./Router/FieldRouter";
import CropRouter from "./Router/CropRouter";

const app = express();
app.use(express.json())
app.use(cors())

app.use('/field',FieldRouter)
app.use('/crop',CropRouter)
app.listen(8080,()=>{
    console.log("Server running on port 8080")
})