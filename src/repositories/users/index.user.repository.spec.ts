import { User } from '@entity/users/user.entity';
import { AppDataSource } from '@infrastructure/db.infrastructure';
import { UserRepository } from '@repository/users/user.repository';
import assert from 'node:assert';
import { describe, it, before } from 'node:test';

describe('User Service', () => {
  before(async () => {
    await AppDataSource.initialize();
  });

  it('should create user', async () => {
    const repository = new UserRepository();

    const newUser = new User();

    const user = await repository.createUser({
      email: 'teste@teste.com',
      name: 'teste teste',
      role: 'admin',
      isOnboarded: false
    });

    user?.id && repository.deleteUser(user?.id);

    assert.equal(typeof user, typeof newUser);
  });

  it('should update user', async () => {
    const repository = new UserRepository();

    const create = await repository.createUser({
      email: 'teste@teste.com',
      name: 'teste teste',
      role: 'admin',
      isOnboarded: false
    });

    if (!create?.id) throw new Error('User not found');

    const updated = await repository.updateUser(create?.id, {
      email: 'teste@teste.com',
      name: 'teste teste',
      role: 'admin',
      isOnboarded: false
    });

    repository.deleteUser(create?.id);

    assert.notEqual(create, updated);
  });
});
