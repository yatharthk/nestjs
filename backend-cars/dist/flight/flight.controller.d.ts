import { FlightsService } from './flight.service';
import { Flights } from './flight.entity';
import { Flight } from './flight.model';
export declare class FlightsController {
    private readonly flightService;
    constructor(flightService: FlightsService);
    create(flight: Flight): Promise<Flights[]>;
    findAll(): Promise<Flights[]>;
    getOrigins(): Promise<string[]>;
    getDestinations(): Promise<string[]>;
    query(orig: any, dest: any): Promise<any>;
    findOne(param: any): Promise<Flight>;
    update(id: any, flight: Flight): Promise<any>;
    delete(id: any): Promise<any>;
}
