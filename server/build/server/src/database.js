"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
/* Creates the pool coming from the Keys file. */
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
/* The connection is set, this is displayed wit the command npm run dev.
THIS CPOMMAND IS NECCESARY IN ORDER TO RUN THE SERVER LOCALLY*/
pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);
    console.log("DB is connected...");
});
exports.default = pool;
