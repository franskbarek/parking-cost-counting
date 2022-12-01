import Knex from "knex";
import { development } from "./knexfile.js";

const db = Knex(development);

export default db;
