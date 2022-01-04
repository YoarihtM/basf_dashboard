import mysql from "promise-mysql";
import keys from "./keys";

/* Creates the pool coming from the Keys file. */
const pool = mysql.createPool(keys.database);

/* The connection is set, this is displayed wit the command npm run dev. 
THIS CPOMMAND IS NECCESARY IN ORDER TO RUN THE SERVER LOCALLY*/

pool.getConnection().then((connection) => {
  pool.releaseConnection(connection);
  console.log("DB is connected...");
});

export default pool;
