export interface CreateDropdownDto {
  name: string;
  values?: string[];
}

export interface UpdateDropdownDto {
  name?: string;
  isActive?: boolean;
  updatedBy: string;
  updatedAt: Date;
  values?: string[];
}

export interface DropdownDto {
  id: number;
  name: string;
  isServerside: boolean;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TransformedDropdownDto {
  id: number;
  name: string;
  isServerside: boolean;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  values: DropdownValueDto[];
}
export interface DropdownValueDto {
  id: number;
  value: string;
  dropdownId: number;
  isActive: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DropdownWithValuesDto {
  id: number;
  name: string;
  isServerside: boolean;
  isActive: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  values: DropdownValueDto[];
}

export interface AuditFields {
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DropdownAuditTrail {
  id: number;
  dropdownId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}
