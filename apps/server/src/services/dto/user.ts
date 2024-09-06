import { CreateUserDao, UpdateUserDao } from '../../models/dao/user';
import { ApiError, ApiErrorCode } from '../../models/dto/common/error';
import { SignupUserDto, UpdateUserDto, UserDto } from '../../models/dto/user';
import { userDaoService } from '../dao/user';

export class UserDtoService {
  async getUser(id: number): Promise<UserDto> {
    try {
      return await userDaoService.getUser(id);
    } catch (error) {
      console.error('Failed to get User', error);
      throw error;
    }
  }

  async login(username: string, password: string): Promise<UserDto | null> {
    try {
      const user = await userDaoService.login(username, password);
      if (user) {
        return user;
      }
      throw new ApiError('Failed to login', ApiErrorCode.INVALID_CREDENTIALS);
    } catch (error) {
      console.error('Failed to login', error);
      throw error;
    }
  }

  async signup(signupUserDto: SignupUserDto): Promise<UserDto> {
    try {
      const user = await userDaoService.createUser(
        signupUserDto as CreateUserDao,
      );
      return await userDaoService.getUser(user.id);
    } catch (error) {
      console.error('Failed to Signup', error);
      const user = await userDaoService.findUser(
        signupUserDto.phone,
        signupUserDto.email,
      );
      if (user) {
        throw new ApiError(
          'Failed to Signup',
          ApiErrorCode.PHONE_OR_EMAIL_ALREADY_EXISTS,
        );
      }
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await userDaoService.deleteUser(id);
    } catch (error) {
      console.error('Failed to delete', error);
      throw error;
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    try {
      await userDaoService.updateUser(id, updateUserDto as UpdateUserDao);
      return await userDaoService.getUser(id);
    } catch (error) {
      console.error('Failed to update', error);
      const user = userDaoService.findUser(
        updateUserDto.phone,
        updateUserDto.email,
      );
      if (user) {
        throw new ApiError(
          `Failed to update`,
          ApiErrorCode.PHONE_OR_EMAIL_ALREADY_EXISTS,
        );
      }
      throw error;
    }
  }
}

export const userDtoService = new UserDtoService();
