export interface AuditTrailDto {
  changes: Record<
    string,
    {
      new: string;
      old: string;
    }
  >;
  updatedBy: string;
  id: number;
  updatedAt: Date;
  entityId: number;
  entityType: string;
  action: string;
}

export interface AuditTrailWithUser {
  entityId: number;
  entityType: string;
  id: number;
  updatedBy: number;
  updatedAt: Date;
  action: string;
  changes: unknown;
  username: string | null;
}

export const auditTrailEntities = {
  parentProduct: 'ParentProduct',
  product: 'Product',
  procedure: 'Procedure',
  contact: 'Contact',
  dropdown: 'Dropdown',
  formBuilder: 'FormBuilder', // Procedure Templates
  milestone: 'Milestone', // Milestone Templates
  user: 'User',
} as const;

export type AuditTrailEntites =
  (typeof auditTrailEntities)[keyof typeof auditTrailEntities];
