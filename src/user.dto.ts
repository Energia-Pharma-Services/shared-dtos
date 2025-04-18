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

export const ROLE_KEYS = {
  ADMIN: 'ADMIN',
  REGULATORY_MANAGER: 'REGULATORY_MANAGER',
  REGULATORY_DEPARTMENT: 'REGULATORY_DEPARTMENT',
  OTHER_DEPARTMENT: 'OTHER_DEPARTMENT',
  EPS_COLLEAGUES_AFRICA: 'EPS_COLLEAGUES_AFRICA',
  PARTNERS_CLIENTS: 'PARTNERS_CLIENTS',
  EPS_AFRICA_LOCAL_PHARMACY: 'EPS_AFRICA_LOCAL_PHARMACY',
} as const;

export const PERMISSIONS = {
  ALL: 'all',

  // Procedures
  CREATE_EDIT_PROCEDURE: 'create_edit_procedure',
  CREATE_PARENT_PROCEDURE: 'create_parent_procedure',
  EDIT_PROCEDURE: 'edit_procedure',
  VIEW_PROCEDURES: 'view_procedures',
  DELETE_PROCEDURE: 'delete_procedure',
  CREATE_FEEDBACK: 'create_feedback',
  VIEW_FEEDBACK: 'view_feedback',

  // Parent Products
  CREATE_EDIT_PARENT_PRODUCTS: 'create_edit_parent_products',
  VIEW_PARENT_PRODUCTS: 'view_parent_products',

  // Products
  VIEW_PRODUCTS: 'view_products',
  CREATE_EDIT_PRODUCTS: 'create_edit_products',

  // Contacts
  CREATE_EDIT_CONTACTS: 'create_edit_contacts',
  VIEW_CONTACTS: 'view_contacts',

  // Documents
  CREATE_EDIT_DOCUMENT: 'create_edit_document',
  VIEW_DOCUMENTS: 'view_documents',

  // Dropdowns
  CREATE_EDIT_DROPDOWN: 'create_edit_dropdown',
  VIEW_DROPDOWNS: 'view_dropdowns',
  VIEW_DROPDOWN: 'view_dropdown',
  DELETE_DROPDOWN: 'delete_dropdown',

  // Procedure Templates
  CREATE_EDIT_PROCEDURE_TEMPLATE: 'create_edit_procedure_template',
  VIEW_PROCEDURE_TEMPLATES: 'view_procedure_templates',
  DELETE_PROCEDURE_TEMPLATE: 'delete_procedure_template',

  // Milestones
  CREATE_EDIT_MILESTONE: 'create_edit_milestone',
  VIEW_MILESTONES: 'view_milestones',
  DELETE_MILESTONE: 'delete_milestone',
};



export const rolePermissions: Record<
  keyof typeof ROLE_KEYS,
  string[]
> = {
  [ROLE_KEYS.ADMIN]: [PERMISSIONS.ALL],
  [ROLE_KEYS.REGULATORY_MANAGER]: [
    PERMISSIONS.CREATE_EDIT_PROCEDURE,
    PERMISSIONS.CREATE_PARENT_PROCEDURE,
    PERMISSIONS.VIEW_PROCEDURES,
    PERMISSIONS.VIEW_PARENT_PRODUCTS,
    PERMISSIONS.CREATE_EDIT_PARENT_PRODUCTS,
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.CREATE_EDIT_PRODUCTS,
    PERMISSIONS.CREATE_EDIT_CONTACTS,
    PERMISSIONS.VIEW_CONTACTS,
    PERMISSIONS.VIEW_FEEDBACK
  ],
  [ROLE_KEYS.REGULATORY_DEPARTMENT]: [
    PERMISSIONS.CREATE_EDIT_PROCEDURE,
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.VIEW_PARENT_PRODUCTS,
    PERMISSIONS.VIEW_PROCEDURES,
    PERMISSIONS.VIEW_CONTACTS
  ],
  [ROLE_KEYS.OTHER_DEPARTMENT]: [
    PERMISSIONS.VIEW_PARENT_PRODUCTS,
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.VIEW_PROCEDURES,
  ],
  [ROLE_KEYS.EPS_COLLEAGUES_AFRICA]: [
    PERMISSIONS.VIEW_PROCEDURES,
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.VIEW_PARENT_PRODUCTS,
    PERMISSIONS.CREATE_FEEDBACK,
    PERMISSIONS.VIEW_FEEDBACK
  ],
  [ROLE_KEYS.PARTNERS_CLIENTS]: [PERMISSIONS.VIEW_PROCEDURES],
  [ROLE_KEYS.EPS_AFRICA_LOCAL_PHARMACY]: [
    PERMISSIONS.VIEW_PROCEDURES,
    PERMISSIONS.EDIT_PROCEDURE,
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.VIEW_PARENT_PRODUCTS
  ],
};

export default rolePermissions;
