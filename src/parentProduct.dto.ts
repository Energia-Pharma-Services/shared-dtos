export interface CreateParentProductRequest {
  productCode: string;
  productName: string;
  activeSubstanceEn: string;
  activeSubstanceFr: string;
  atcCode: string;
  productType: string;
}

export interface UpdateParentProductDto {
  productCode?: string;
  productName?: string;
  activeSubstanceEn?: string;
  activeSubstanceFr?: string;
  atcCode?: string;
  productType?: string;
  isActive?: boolean;
  isDeleted?: boolean;
}

export interface ParentProductDto {
  id: number;
  productCode: string;
  productName: string;
  activeSubstanceEn: string;
  activeSubstanceFr: string;
  atcCode: string;
  productType: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
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
  updatedBy: number;
  updatedAt: Date;
  isActive: boolean;
}
