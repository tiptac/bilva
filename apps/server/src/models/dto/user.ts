import { UserRole, UserStatus } from '@prisma/client';
import { Page } from './common/page';

export interface SignupUserDto {
  fullName: string;
  phone: string;
  email: string;
  password: string;
}

export interface UserDto extends Omit<SignupUserDto, 'password'> {
  id: number;
  status: UserStatus;
  role: UserRole;
}

export interface UpdateUserDto {
  fullName?: string;
  phone?: string;
  email?: string;
  password?: string;
  status?: UserStatus;
  role?: UserRole;
}

export type UserPage = Page<UserDto>;
