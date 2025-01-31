import {PrismaClient} from "@prisma/client";
import Field from "../Model/Field";

const prisma = new PrismaClient();

export async function saveField(field:Field){
    try {
        const newField =await prisma.field.create({
            data: {
                fieldName: field.fieldName,
                location: field.location,
                extend: field.extend,
                fieldImg1: field.fieldImg1,
                fieldImg2: field.fieldImg2
            }
        })
        console.log("Field saved ",newField);
        return newField;
    }catch (e){
        console.log(e)
    }
}

export async function deleteField(fieldId:number){
    try {
        const deleteField = await prisma.field.delete({
            where:{
                fieldId:fieldId
            }
        })
        console.log("Field Deleted ",deleteField)
        return deleteField
    }catch (e){
        console.log(e)
    }
}

export  async function UpdateField(fieldId:number,field:Field){
    try {
        const updateField = await prisma.field.update({
            where:{fieldId:field.fieldId},
            data:{
                fieldName: field.fieldName,
                location: field.location,
                extend: field.extend,
                fieldImg1: field.fieldImg1,
                fieldImg2: field.fieldImg2
            }
        })
        console.log("Field updated ",updateField)
        return updateField
    }catch (e){
        console.log(e)
    }
}

export async function getAllFields(){
    try {
       return await prisma.field.findMany()
    }catch (e){
        console.log(e)
    }
}

export async function getFieldById(fieldId:number){
    try {
        const getField = await prisma.field.findUnique({
            where:{fieldId:fieldId}
        })
        console.log(getField);
        return getField
    }catch (e){
        console.log(e)
    }
}