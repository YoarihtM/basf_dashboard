import { Router } from "express";

import tanksController from "../controllers/tanksController";

/* In this file we decalare the routes for the different functions of the tanksController */
class TanksRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  /* Here the routes are declared using a REST API framework, as it is the dashboard is read/only so all we have is GET */
  config(): void {
    this.router.get("/", tanksController.list);
    this.router.get("/:id", tanksController.getTank);
    this.router.get("/startDate/:id", tanksController.getStartDate);
    this.router.get("/deliveryDate/:id", tanksController.getDeliveryDate);
    // this.router.post("/", tanksController.create);

  }
}
const tanks = new TanksRoutes();
export default tanks.router;
