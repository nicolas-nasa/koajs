import helpers from '@helper/index.helper';
import { User } from '@entity/users/user.entity';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: helpers.envs.dataBaseUrl,
  logging: true,
  entities: [User],
  migrations: ['../migrations/*.ts,*.js'],
  subscribers: []
});

export { AppDataSource };
