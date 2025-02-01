import {PrismaClient} from "@prisma/client";
import Log from "../Model/log";

const prisma = new PrismaClient();

import fs from 'fs';

export async function addLog(log: Log) {
    try {
        let base64Image = log.observationImg;

        // Check if observationImg is a file path and convert to Base64
        if (fs.existsSync(log.observationImg)) {
            const imageBuffer = fs.readFileSync(log.observationImg);
            base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
        }

        // Ensure it is a valid Base64 string
        if (!base64Image.startsWith('data:image')) {
            throw new Error('Invalid Base64 image format');
        }

        const newLog = await prisma.log.create({
            data: {
                log_date: log.log_date,
                log_details: log.log_details,
                observed_image: base64Image, // Store Base64 string
            },
        });

        console.log('Log added:', newLog);
        return newLog;
    } catch (err) {
        console.error('Error adding log:', err);
    }
}

export async function deleteLog(id:number){
    try {
        const deleteLog = await prisma.log.delete({
            where:{
                id:id
            }
        })
        console.log("Log deleted ",deleteLog)
        return deleteLog;
    }catch (e){
        console.log("Error deleting log ",e)
    }
}

export async function updateLog(id:number,log:Log){
    try {
        const updateLog = await prisma.log.update({
            where:{
                id:id
            },
            data:{
                log_date:log.log_date,
                log_details:log.log_details,
                observed_image:log.observationImg
            }
        })
        console.log("Log updated ",updateLog)
        return updateLog;
    }catch (e){
        console.log("Error updating log ",e)
    }
}

export async function getAllLogs(){
    try {
        return await prisma.log.findMany()
    }catch (e){
        console.log("Error getting all logs ",e)
    }
}

export async function getLogById(id:number){
    try {
        return await prisma.log.findUnique({
            where:{
                id:id
            }
        })
    }catch (e){
        console.log("Error getting log by id ",e)
    }
}