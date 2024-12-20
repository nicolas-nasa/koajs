import { User } from '@entity/users/user.entity';
import { UserRepository } from '@repository/users/user.repository';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  async singIn(user: User): Promise<{ token: string }> {
    const find = await this.getUserByEmail(user.email);

    if (!find) await this.registerUser(user);

    return { token: '' };
  }

  async updateUser(user: User, permission: string): Promise<User> {
    const findUser = await this.userRepository.findUserByEmail(user.email);

    if (!findUser?.id) throw new Error('User not found');

    const newUser = new User();

    newUser.name = user.name || findUser.name;
    newUser.email = user.email;
    if (permission === 'admin') newUser.role = user.role;

    if (user.name !== findUser.name) newUser.isOnboarded = true;

    return await this.userRepository.updateUser(findUser.id, newUser);
  }

  async listUsers(): Promise<User[]> {
    return this.userRepository.listUsers();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findUserByEmail(email);
  }
}
