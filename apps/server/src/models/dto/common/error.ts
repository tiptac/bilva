export enum ApiErrorCode {
  PHONE_OR_EMAIL_ALREADY_EXISTS = 'A0001',
  INVALID_CREDENTIALS = 'A0002',
}
export const ApiErrorMessages = {
  [ApiErrorCode.PHONE_OR_EMAIL_ALREADY_EXISTS]:
    'User with same phone or email already exists',
  [ApiErrorCode.INVALID_CREDENTIALS]: 'Invalid Credentials',
};

export class ApiError extends Error {
  errorCode: ApiErrorCode;
  errorMessage: string;
  name = 'ApiError';
  constructor(message: string, errorCode: ApiErrorCode) {
    super(message);
    this.errorCode = errorCode;
    this.errorMessage = ApiErrorMessages[errorCode];
  }
}
