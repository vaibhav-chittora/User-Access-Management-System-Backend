import User from "../models/user.js";
import Software from "../models/software.js";
import Request from "../models/request.js";

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./serverConfig.js";

export default {
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  entities: [User, Software, Request],
};
