import { User } from '@entity/users/user.entity';

export interface IUsersRepository {
  findUserByEmail: (email: string) => Promise<User | null>;
  createUser: (user: User) => Promise<User>;
  updateUser: (id: string, user: User) => Promise<User>;
  deleteUser: (id: string) => Promise<User>;
  listUsers: () => Promise<User[]>;
}
