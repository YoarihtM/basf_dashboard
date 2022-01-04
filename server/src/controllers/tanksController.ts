import { Request, Response } from "express";
import { Tank } from "../../../client/src/app/tank";

import pool from "../database";

// In TanksController we manage the SQL Queries to our database
class TanksController {
  // This first method creates a general Query to look up all the avalable tanks and list them.
  public async list(req: Request, res: Response) {
    const tanks: Tank[] = await pool.query("SELECT * FROM tanks");
    res.json(tanks);
  }

  // This method is used to create a tank, currently non operational
  // public async create(req: Request, res: Response): Promise<void> {
  //   // await pool.query('INSERT into tanks set ?', [req.body])
  //   res.json({ message: "Tank saved" });
  // }

  // This is probably the most important method, it retrieves a singular tank from the database by comparing the id
  public async getTank(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const tank = await pool.query("SELECT * FROM tanks WHERE id = ?", [id]);
    console.log("getTank");
    if (tank.length > 0) {
      return res.json(tank[0]);
    }
    res.status(404).json({ text: "Server Error: The tank does not exist" });
  }

  /*   
Query for retrieving the StartDate, important in creating the difference between
current day and the delivery day.
 */
  public async getStartDate(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const date: string[] = await pool.query(
      "SELECT startDate FROM tanks WHERE id = ?",
      [id]
    );
    if (date.length > 0) {
      return res.json(date[0]);
    }
    res.status(404).json({ text: "Server Error: The tank does not exist" });
  }

  /*   
Query for retrieving the DeliveryDate, important in creating the difference between
current day and the delivery day.
 */
  public async getDeliveryDate(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const date: string[] = await pool.query(
      "SELECT deliveryDate FROM tanks WHERE id = ?",
      [id]
    );
    if (date.length > 0) {
      return res.json(date[0]);
    }
    res.status(404).json({ text: "Server Errir: The tank does not exist" });
  }
}

const tanksController = new TanksController();
export default tanksController;
