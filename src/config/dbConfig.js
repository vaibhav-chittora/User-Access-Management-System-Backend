import { DataSource } from "typeorm";
import ormConfig from "./ormConfig.js";

export const AppDataSource = new DataSource(ormConfig);

export async function connectDB() {
  try {
    await AppDataSource.initialize();
    console.log("Successfully connected PgSQL Database");
  } catch (error) {
    console.log("Error while connecting to the database", error);
    throw error;
  }
}
