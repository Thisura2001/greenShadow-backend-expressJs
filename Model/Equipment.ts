import {EquipmentType, Field, Staff, Status} from "@prisma/client";

export default class Equipment{
    eqId!:number;
    name!:string;
    equipmentType!:EquipmentType;
    status!:Status;
    staffId!:Staff;
    field!: Field;
}