export interface CreateDropdownDto {
  name: string;
  values?: string[];
}

export interface UpdateDropdownDto {
  name?: string;
  is_active?: boolean;
  updated_by: number;
  updated_at: Date;
  values?: string[];
}

export interface DropdownDto {
  id: number;
  name: string;
  is_serverside: boolean;
  is_active: boolean;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface DropdownValueDto {
  id: number;
  value: string;
  dropdown_id: number;
  is_active: boolean;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface DropdownWithValuesDto {
  id: number;
  name: string;
  is_serverside: boolean;
  is_active: boolean;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
  values: DropdownValueDto[];
}
