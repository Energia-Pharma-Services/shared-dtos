export interface CreateParentProductRequest {
  productCode: string;
  productName: string;
  activeSubstance: string;
  atcCode: string;
  productType: string;
}

export interface UpdateParentProductDto {
  productCode?: string;
  productName?: string;
  activeSubstance?: string;
  atcCode?: string;
  productType?: string;
  isActive?: boolean;
  isDeleted?: boolean;
}

export interface ParentProductDto {
  id: number;
  productCode: string;
  productName: string;
  activeSubstance: string;
  atcCode: string;
  productType: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  isActive: boolean;
  isDeleted: boolean;
}

export interface ParentProductAuditTrailDto {
  id: number;
  parentProductId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}

export interface DeleteProductPayload {
  isDeleted: boolean;
  updatedBy: string;
  updatedAt: Date;
  isActive: boolean;
}
