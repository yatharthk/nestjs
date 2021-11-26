import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Cars } from './car.entity';

@Injectable()
export class CarsService {

  
    constructor(@InjectRepository(Cars) private  carRepository:Repository<Cars>){}

    findAll() {
        // return [{make: 'honda', model: 'accord',miles:100},
        // {make: 'subaru', model: 'outback',miles:101},
        // {make: 'fiat', model: '123 spider',miles:102}];
          
        // }
    return this.carRepository.find();
    }

    findOne(id:number){
            // return {make: 'ford', model: 'mustang',miles:103};
         return this.carRepository.findOne(id);
        }
}
