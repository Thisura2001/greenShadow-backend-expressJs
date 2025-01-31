import { Field } from "@prisma/client";

export default class Crop {
    cropId!: number;
    commonName!: string;
    scientificName!: string;
    cropImg!: string;
    category!: string;
    season!: string;
    field!: Field;
}
