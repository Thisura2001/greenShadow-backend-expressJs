import {PrismaClient, Vehicle} from "@prisma/client";

const prisma = new PrismaClient();

export async function addVehicle(v:Vehicle){
    try {
        if (v.staffId){
            const staffExists = await prisma.staff.findUnique({
                where:{id:v.staffId}
            });
            if (!staffExists){
                throw new Error(`Staff with ID ${v.staffId} does not exist`);
        }
    }
        const newVehicle = await prisma.vehicle.create({
            data:{
                licensePlateNumber:v.licensePlateNumber,
                vehicleCategory:v.vehicleCategory,
                fuelType:v.fuelType,
                status:v.status,
                staffId:v.staffId
            }
        })
        console.log("Vehicle added ",newVehicle);
        return newVehicle;
    }catch (err){
        console.log("Error adding vehicle ",err);
    }
}
export async function deleteVehicle(eqId:number){
    try {
        const deleteVehicle = await prisma.vehicle.delete({
            where:{
                vehicle_code:eqId
            }
        })
        console.log("Vehicle deleted ",deleteVehicle);
        return deleteVehicle;
    }catch (err){
        console.log("Error deleting vehicle ",err);
    }
}
export async function updateVehicle(eqId:number,v:Vehicle){
    try {
        const updateVehicle = await prisma.vehicle.update({
            where:{
                vehicle_code:eqId
            },
            data:{
                licensePlateNumber:v.licensePlateNumber,
                vehicleCategory:v.vehicleCategory,
                fuelType:v.fuelType,
                status:v.status,
                staffId:v.staffId
            }
        })
        console.log("Vehicle updated ",updateVehicle);
        return updateVehicle;
    }catch (err){
        console.log("Error updating vehicle ",err);
    }
}
export async function getAllVehicles(){
    try {
        return await prisma.vehicle.findMany();
    }catch (err){
        console.log("Error getting vehicles ",err);
    }
}
export async function getVehicleById(eqId:number){
    try {
        return await prisma.vehicle.findUnique({
            where:{
                vehicle_code:eqId
            }
        })
    }catch (err){
        console.log("Error getting vehicle by ID ",err);
    }
}