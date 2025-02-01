import {Equipment, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function addEquipment(eq:Equipment){
    try {
        if (eq.fieldId){
            const fieldExists = await prisma.field.findUnique({
                where: { fieldId: eq.fieldId }
            });
            if(!fieldExists){
                throw new Error(`Field with ID ${eq.fieldId} does not exist.`);
            }
        }
        if (eq.staffId){
            const staffExists = await prisma.staff.findUnique({
                where: { id: eq.staffId }
            });
            if(!staffExists){
                throw new Error(`Staff with ID ${eq.staffId} does not exist.`);
            }
        }
        const newEquipment = await prisma.equipment.create({
            data:{
                name: eq.name,
                equipmentType: eq.equipmentType,
                status: eq.status,
                staffId: eq.staffId,
                fieldId: eq.fieldId
            }
        })
        console.log("Equipment added ",newEquipment)
        return newEquipment;
    }catch (e){
        console.log("Error adding equipment ",e)
    }
}
export async function updateEquipment(eqId:number,eq:Equipment){
    try {
        const equipment = await prisma.equipment.update({
            where: { eqId: eqId },
            data: {
                name: eq.name,
                equipmentType: eq.equipmentType,
                status: eq.status,
                staffId: eq.staffId,
                fieldId: eq.fieldId
            }
        })
        console.log("Equipment updated ",equipment)
        return equipment;
    }catch (e){
        console.log("Error updating equipment ",e)
    }
}
export async function deleteEquipment(eqId:number){
    try {
        const equipment = await prisma.equipment.delete({
            where: { eqId: eqId }
        })
        console.log("Equipment deleted ",equipment)
        return equipment;
    }catch (e){
        console.log("Error deleting equipment ",e)
    }
}
export async function getAllEquipment(){
    try {
        return await prisma.equipment.findMany();
    }catch (e){
        console.log("Error getting equipment ",e)
    }
}
export async function getEquipmentById(eqId:number){
    try {
        return await prisma.equipment.findUnique({
            where: { eqId: eqId }
        });
    }catch (e){
        console.log("Error getting equipment ",e)
    }
}