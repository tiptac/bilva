import { UserDao } from './user';

export interface CreatePropertyDao {
  summary: string;
  description: string;
  address: string;
  userId: number;
}

export interface PropertyDao {
  id: number;
  summary: string;
  description: string;
  address: string;
}

export interface PropertyDetailsDao extends PropertyDao {
  user: UserDao;
}
