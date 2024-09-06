import { User, UserStatus } from '@prisma/client';

export type CreateUserDao = {
  password: string;
  fullName: string;
  phone: string;
  email: string;
};

export interface UpdateUserDao {
  password?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  status?: UserStatus;
}
export type UserDao = Omit<User, 'passHash'>;
