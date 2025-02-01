import {Staff, Status} from "@prisma/client";

export default class Vehicle {
    vehicleCode!: number;
    licensePlateNumber!: string;
    vehicleCategory!: string;
    fuelType!: string;
    status!: Status;
    staff!: Staff;
}