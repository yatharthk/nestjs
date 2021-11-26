import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {

//    // new code
//    subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
//    honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
//    bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
 
//    cars:Car[] = [this.subaru, this.honda, this.bmw];



  constructor(private httpclient:HttpClient) { }

//   // new code
//   getCars() {
//     return this.cars;
//    }

//   addCar(car: Car){
//     this.cars.push(car);
//   }

getCars(): Observable<Car[]> {

    return this.httpclient.get<any>('http://localhost:3000/cars/');
  }

//   addCar(car: Car){
//     this.httpclient.post(car);
//   }

}
