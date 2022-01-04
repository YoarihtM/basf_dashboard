import express, { Application } from "express";

import morgan from "morgan";
import cors from "cors";

import indexRoutes from "./routes/indexRoutes";
import tanksRoutes from "./routes/tanksRoutes";

/* This Class serves as a configuration file for the server (API) */
class Server {
  private app: Application;

  /* Using Express we build our application */
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  /* In the config method we declare the port, currently as 3000. We declare the library morgan
   for our dev command, cors for the recognition, json as the file type and the encoding for the urls */

  config(): void {
    this.app.set("port", process.env.port || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  /* Declare the main routes for the server, we have index routes that dont really do anything and the tankRoutes that are the ones that matter. */
  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/tanks", tanksRoutes);
  }

  /* Start presents the port and the listening, we also declare the Log. */
  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port ", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
