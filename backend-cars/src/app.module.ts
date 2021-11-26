import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/car.entity';
import { CarModule } from './cars/cars.module';
import { Flights } from './flight/flight.entity';
import { FlightsModule } from './flight/flight.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'transportation',
      entities: [Cars, Flights],
      synchronize: true,
    }),
    CarModule, FlightsModule
  ],
  
})
export class AppModule {}