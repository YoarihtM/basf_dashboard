"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tanksController_1 = __importDefault(require("../controllers/tanksController"));
/* In this file we decalare the routes for the different functions of the tanksController */
class TanksRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    /* Here the routes are declared using a REST API framework, as it is the dashboard is read/only so all we have is GET */
    config() {
        this.router.get("/", tanksController_1.default.list);
        this.router.get("/:id", tanksController_1.default.getTank);
        this.router.get("/startDate/:id", tanksController_1.default.getStartDate);
        this.router.get("/deliveryDate/:id", tanksController_1.default.getDeliveryDate);
        // this.router.post("/", tanksController.create);
    }
}
const tanks = new TanksRoutes();
exports.default = tanks.router;
