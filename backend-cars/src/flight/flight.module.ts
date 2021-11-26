import { Module } from '@nestjs/common';
import { FlightsService } from './flight.service';
import { FlightsController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flight.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Flights])],
  providers: [FlightsService,Repository],
  controllers: [FlightsController],
})
export class FlightsModule {}