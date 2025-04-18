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
  isDeleted: boolean | null;
  roleId: number | null;
  isTwoFactorEnabled: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MinimalUserDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  roleId: number;
  email: string;
  isActive: boolean;
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
  createdBy: string;
  updatedBy: string;
}

export interface LoggedInUser {
  id: number;
  username: string;
  roles: string[];
  permissions: string[];
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

export interface UserAuditTrail {
  id: number;
  userId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}

export interface LdapUser {
  uid: string;
  givenName: string;
  sn: string;
  mail: string;
}

export interface UserRepresentation {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
