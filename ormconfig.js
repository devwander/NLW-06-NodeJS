module.exports = {
  type: process.env.ORMCONFIG_TYPE,
  database: process.env.ORMCONFIG_DATABASE,
  migrations: [process.env.ORMCONFIG_MIGRATIONS],
  entities: [process.env.ORMCONFIG_ENTITIES],
  cli: {
    migrationsDir: process.env.ORMCONFIG_MIGRATIONSDIR,
    entitiesDir: process.env.ORMCONFIG_ENTITIESDIR,
  },
};
