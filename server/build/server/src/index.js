"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const tanksRoutes_1 = __importDefault(require("./routes/tanksRoutes"));
/* This Class serves as a configuration file for the server (API) */
class Server {
    /* Using Express we build our application */
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    /* In the config method we declare the port, currently as 3000. We declare the library morgan
     for our dev command, cors for the recognition, json as the file type and the encoding for the urls */
    config() {
        this.app.set("port", process.env.port || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    /* Declare the main routes for the server, we have index routes that dont really do anything and the tankRoutes that are the ones that matter. */
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/tanks", tanksRoutes_1.default);
    }
    /* Start presents the port and the listening, we also declare the Log. */
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
