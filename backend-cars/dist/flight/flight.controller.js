"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
let FlightsController = class FlightsController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async create(flight) {
        return this.flightService.create(flight);
    }
    findAll() {
        return this.flightService.findAll();
    }
    getOrigins() {
        return this.flightService.getFlightOrigins();
    }
    getDestinations() {
        return this.flightService.getFlightDestinations();
    }
    async query(orig, dest) {
        return await this.flightService.query(orig, dest);
    }
    async findOne(param) {
        return this.flightService.findOne(param.id);
    }
    async update(id, flight) {
        flight.id = Number(id);
        return this.flightService.update(flight);
    }
    async delete(id) {
        return this.flightService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findAll", null);
__decorate([
    common_1.Get("cities/origins"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "getOrigins", null);
__decorate([
    common_1.Get("cities/destinations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "getDestinations", null);
__decorate([
    common_1.Get("query/:orig/:dest"),
    __param(0, common_1.Param('orig')), __param(1, common_1.Param('dest')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "query", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findOne", null);
__decorate([
    common_1.Post(":id/update"),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "update", null);
__decorate([
    common_1.Post(":id/delete"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "delete", null);
FlightsController = __decorate([
    common_1.Controller('flights'),
    __metadata("design:paramtypes", [flight_service_1.FlightsService])
], FlightsController);
exports.FlightsController = FlightsController;
//# sourceMappingURL=flight.controller.js.map