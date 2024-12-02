export interface UserDto {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
  isActive?: boolean;
}

export interface VerifyUserRequest {
  email: string;
  code: string;
}

export interface FullUserDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  isDeleted: boolean;
  roleId: number;
  isTwoFactorEnabled: boolean;
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListUserDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  isActive: boolean | null;
  isDeleted: boolean | null;
  roleId: number | null;
  isTwoFactorEnabled: boolean | null;
  twoFactorSecret?: string | null;
}

export interface UpdateUserDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  isActive: boolean | null;
  roleId: number | null;
  twoFactorSecret: string | null;
  isTwoFactorEnabled: boolean | null;
}

export interface CreateUserParams {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roleId: number;
  createdBy: number;
  updatedBy: number;
}

export interface LoggedInUser {
  id: number;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserSelectFields {
  email: string;
  password: string;
  twoFactorSecret: string | null;
  isTwoFactorEnabled: boolean | null;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  isActive: boolean | null;
  isDeleted: boolean | null;
  roleId: number | null;
}
