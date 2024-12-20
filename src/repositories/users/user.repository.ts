import { User } from '@entity/users/user.entity';
import { IUsersRepository } from '@interface/users/user.interface';
import { Repository } from 'typeorm';
import { AppDataSource } from '@infrastructure/db.infrastructure';

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async listUsers() {
    return this.repository.find();
    // Create pagination to imporove performance
  }
  async findUserByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }
  async createUser(user: User): Promise<User> {
    return this.repository.save(user);
  }
  async updateUser(id: string, user: User): Promise<User> {
    await this.repository.update(id, {
      ...user,
      updatedAt: new Date().toISOString()
    });

    const findedUser = await this.repository.findOneBy({ id });

    if (!findedUser) throw new Error('User not found');

    return findedUser;
  }
  async deleteUser(id: string): Promise<User> {
    const findedUser = await this.repository.findOneBy({ id });

    if (!findedUser?.id) throw new Error('User not found');

    await this.repository.delete(findedUser.id);

    return findedUser;
  }
}
