import { Request, Response } from "express";

// Initial Controller used to redirect to the correct API URI
class IndexController {
  public index(req: Request, res: Response) {
    res.json({text: 'API is in /api/tanks'});
  }
}

export const indexController = new IndexController()