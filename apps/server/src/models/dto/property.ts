import { UserDto } from './user';

export interface CreatePropertyDto {
  summary: string;
  description: string;
  address: string;
}

export interface PropertyDto {
  id: number;
  summary: string;
  description: string;
  address: string;
}

export interface PropertyDetailsDto extends PropertyDto {
  user: UserDto;
}
