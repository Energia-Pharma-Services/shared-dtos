export interface DocumentWithUser {
  id: number;
  entityType: string;
  entityId: number;
  fileName: string;
  filePath: string;
  updatedBy: string | null;
  updatedAt: Date;
}

export interface DocumentDto {
  id: number;
  entityType: string;
  entityId: number;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
  fileName: string;
  filePath: string;
}
