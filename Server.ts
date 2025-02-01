import express from 'express';
import cors from 'cors';
import FieldRouter from "./Router/FieldRouter";
import CropRouter from "./Router/CropRouter";
import StaffRouter from "./Router/StaffRouter";
import EquipmentRouter from "./Router/EquipmentRouter";
import VehicleRouter from "./Router/VehicleRouter";

const app = express();
app.use(express.json())
app.use(cors())

app.use('/field',FieldRouter)
app.use('/crop',CropRouter)
app.use('/staff',StaffRouter)
app.use('/equipment',EquipmentRouter)
app.use('/vehicle',VehicleRouter)
app.listen(8080,()=>{
    console.log("Server running on port 8080")
})