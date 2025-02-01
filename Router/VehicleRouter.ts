import express from "express";
import {addVehicle, deleteVehicle, getAllVehicles, getVehicleById, updateVehicle} from "../Database/Vehicle-dataStore";

const router = express.Router();

router.get('/', async (req, res, next) => {
   try {
        const vehicles = await getAllVehicles()
        res.json(vehicles)
   } catch (err) {
       console.log("error getting vehicles ", err)
   }
})
router.get('/get/:eqId', async (req, res, next) => {
    const eqId: number = parseInt(req.params.eqId)
    try {
        const vehicle = await getVehicleById(eqId)
        res.json(vehicle)
    } catch (err) {
        console.log("error getting vehicle ", err)
    }
})

router.post('/add', async (req, res, next) => {
    console.log(req.body)
    const vehicle =req.body
    try {
        const add = await addVehicle(vehicle)
        res.json(add)
    } catch (err) {
        console.log("Error adding vehicle ", err)
        res.status(400).send("Error adding vehicle");
    }
});

router.put('/update/:eqId', async (req, res, next) => {
    console.log(req.body)
    const vehicle =req.body
    const eqId:number = parseInt(req.params.eqId)
    try {
        const update = await updateVehicle(eqId,vehicle)
        res.json(update)
    } catch (err) {
        console.log("Error updating vehicle ", err)
        res.status(400).send("Error updating vehicle");
    }
});
router.delete('/delete/:eqId', async (req, res, next) => {
    const eqId: number = parseInt(req.params.eqId)
    try {
        const deleteV = await deleteVehicle(eqId)
        res.json(deleteV);
    } catch (err) {
        console.log("Error deleting vehicle ", err);
    }
})
export default router