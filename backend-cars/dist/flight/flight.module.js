"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsModule = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const flight_controller_1 = require("./flight.controller");
const typeorm_1 = require("@nestjs/typeorm");
const flight_entity_1 = require("./flight.entity");
const typeorm_2 = require("typeorm");
let FlightsModule = class FlightsModule {
};
FlightsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([flight_entity_1.Flights])],
        providers: [flight_service_1.FlightsService, typeorm_2.Repository],
        controllers: [flight_controller_1.FlightsController],
    })
], FlightsModule);
exports.FlightsModule = FlightsModule;
//# sourceMappingURL=flight.module.js.map