import { Request } from 'express';
import { UserDto } from '../dto/user';
import { Token } from './token';

export interface Session {
  token?: Token;
}

export type RequestWithSession = Request & { session: Session };
export type RequestWithUser = Request & { user: UserDto };
