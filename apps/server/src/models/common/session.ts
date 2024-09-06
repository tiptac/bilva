import { Request } from 'express';
import { UserDto } from '../dto/user';

export interface Session {
  loggedIn?: boolean;
  user?: UserDto;
}

export type RequestWithSession = Request & { session: Session };
