import {Designation, Field, Gender, Role, Vehicle} from "@prisma/client";

export default class Staff{
    id!: number
    firstName!: string
    designation!: Designation
    gender!: Gender
    joined_date!: string
    dob!: string
    address!: string
    contact_no!: string
    email!: string
    role!: Role
    fields!: Field[];
    vehicle!: Vehicle[];
}