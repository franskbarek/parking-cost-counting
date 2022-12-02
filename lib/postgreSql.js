const { Pool } = require("pg");

const pool = new Pool({
  user: "usrnegvw",
  host: "satao.db.elephantsql.com",
  database: "usrnegvw",
  password: "sC0kZl4hYPfxA4o3t_dtFsvBTE200H-x",
  port: 5432,
});

module.exports = pool;
