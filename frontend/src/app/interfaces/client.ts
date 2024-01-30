import { Service } from "../interfaces/services";

export interface Client {
    id?: number;
    name: string;
    service: Array<Service>,
    price: Array<Service>

}