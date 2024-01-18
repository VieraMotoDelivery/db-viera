import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "./migrations/**.{js,ts}");

  const nodeEnv: string | undefined = process.env.NODE_ENV;
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: dbUrl,
      synchronize: false,
      logging: true,
      migrations: [migrationsPath],
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    host: 'localhost',
    username: 'vinicius',
    password: '1234',
    port: parseInt(process.env.PGPORT),
    database: 'sosnew',
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource = new DataSource(setDataSourceConfig());

export default AppDataSource;
