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
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string;
  filePath: string;
}

export interface TemplatesDto {
  fileName: string;
  filePath: string;
  size: number;
  lastModified: Date;
}
