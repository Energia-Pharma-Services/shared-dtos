export interface UserDto {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role_id: number;
  isActive?: boolean;
}

export interface FullUserDto {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  isDeleted: boolean;
  role_id: number;
  is_two_factor_enabled: boolean;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface ListUserDto {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string | null;
  isActive: boolean | null;
  isDeleted: boolean | null;
  role_id: number | null;
  is_two_factor_enabled: boolean | null;
}

export interface UpdateUserDto {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string | null;
  isActive: boolean | null;
  role_id: number | null;
  two_factor_secret: string | null;
  is_two_factor_enabled: boolean | null;
}

export interface CreateUserParams {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role_id: number;
  created_by: number;
  updated_by: number;
}
