import { Repository } from 'typeorm';
import { Cars } from './car.entity';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Cars>);
    findAll(): Promise<Cars[]>;
    findOne(id: number): Promise<Cars>;
}
