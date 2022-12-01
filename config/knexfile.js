// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "pg",
  connection: {
    database: "usrnegvw",
    user: "usrnegvw",
    password: "sC0kZl4hYPfxA4o3t_dtFsvBTE200H-x",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
