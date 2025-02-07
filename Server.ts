import express from 'express';
import cors from 'cors';
import FieldRouter from './Router/FieldRouter';
import CropRouter from './Router/CropRouter';
import StaffRouter from './Router/StaffRouter';
import EquipmentRouter from './Router/EquipmentRouter';
import VehicleRouter from './Router/VehicleRouter';
import LogRouter from './Router/LogRouter';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.use('/field', FieldRouter);
app.use('/crop', CropRouter);
app.use('/staff', StaffRouter);
app.use('/equipment', EquipmentRouter);
app.use('/vehicle', VehicleRouter);
app.use('/log', LogRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});