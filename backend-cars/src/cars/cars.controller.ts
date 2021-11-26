import { Body, Controller, Get,  Param, Post, Req } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { Cars } from './car.entity';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private carService:CarsService){}
    @Get()
    
    async findAll(@Req() request:Request):Promise<Cars[]>{
        console.log(request)
        // return "this will eventually return a car collection";
       return  await this.carService.findAll();
    }


    @Get('/:id')
    async findOneById(@Req() request:Request,@Param() params){
        return this.carService.findOne(params.id)
    }

    @Post('/:id')
    async addCar(@Body() carParams){
        return `I got your post request!You want to create a ${carParams.make}`;
    }

    @Post(':id/delete')
    deleteCar(@Param() params){
        return `planning to delete ${params.id}`;
    }
}
