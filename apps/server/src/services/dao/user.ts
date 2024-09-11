import sha1 from 'sha1';
import { CreateUserDao, UpdateUserDao, UserDao } from '../../models/dao/user';
import { client } from './common/client';

export class UserDaoService {
  public async login(
    username: string,
    password: string
  ): Promise<UserDao | null> {
    return await client.user.findFirst({
      omit: {
        passHash: true,
      },
      where: {
        OR: [{ phone: username }, { email: username }],
        AND: { passHash: this.getPasswordHash(password) },
      },
    });
  }

  public async getUser(id: number): Promise<UserDao> {
    return await client.user.findFirst({
      omit: {
        passHash: true,
      },
      where: {
        id,
      },
    });
  }

  public async findUser(phone?: string, email?: string): Promise<UserDao> {
    const where = [];
    if (phone) {
      where.push({ phone });
    }
    if (email) {
      where.push({ email });
    }
    return await client.user.findFirst({
      omit: {
        passHash: true,
      },
      where: {
        OR: where,
      },
    });
  }

  public async createUser(createUserDao: CreateUserDao): Promise<UserDao> {
    return await client.user.create({
      data: {
        email: createUserDao.email,
        fullName: createUserDao.fullName,
        passHash: this.getPasswordHash(createUserDao.password),
        phone: createUserDao.phone,
      },
    });
  }

  public async updateUser(
    id: number,
    updateUserDao: UpdateUserDao
  ): Promise<UserDao> {
    return await client.user.update({
      data: updateUserDao.password
        ? {
            email: updateUserDao.email,
            fullName: updateUserDao.fullName,
            phone: updateUserDao.phone,
            passHash: this.getPasswordHash(updateUserDao.password),
          }
        : updateUserDao,
      where: { id: id },
    });
  }

  public async deleteUser(id: number): Promise<UserDao> {
    return await client.user.delete({ where: { id } });
  }

  private getPasswordHash(password: string) {
    const passwordHash = sha1(password, { asBytes: true }).join('');
    return passwordHash;
  }
}

export const userDaoService = new UserDaoService();
