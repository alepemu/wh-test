import { DataSource, DataSourceOptions } from "typeorm";

import { User } from "./entity/User.entity";

const options: DataSourceOptions = {
  type: "sqlite",
  database: "test.db",
  entities: [User],
};

export const AppDataSource = new DataSource(options);
export const UserRepo = AppDataSource.getRepository(User);

export async function checkUserTable() {
  await UserRepo.query(
    "CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))"
  );
}
