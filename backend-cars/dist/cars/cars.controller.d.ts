import { Cars } from './car.entity';
import { CarsService } from './cars.service';
export declare class CarsController {
    private carService;
    constructor(carService: CarsService);
    findAll(request: Request): Promise<Cars[]>;
    findOneById(request: Request, params: any): Promise<Cars>;
    addCar(carParams: any): Promise<string>;
    deleteCar(params: any): string;
}
