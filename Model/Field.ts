import {Crop} from "@prisma/client";

export default class Field{
    fieldId!:number;
    fieldName!:string;
    location!:string;
    extend!:string;
    fieldImg1!:string;
    fieldImg2!:string;
    crops!: Crop[];
}