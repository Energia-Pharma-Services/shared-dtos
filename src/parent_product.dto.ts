export interface CreateParentProductDto {
  product_code: string;
  product_name: string;
  active_substance_en: string;
  active_substance_fr: string;
  ATC_code: string;
  product_type: string;
}

export interface UpdateParentProductDto {
  product_code?: string;
  product_name?: string;
  active_substance_en?: string;
  active_substance_fr?: string;
  ATC_code?: string;
  product_type?: string;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface ParentProductDto {
  id: number;
  product_code: string;
  product_name: string;
  active_substance_en: string;
  active_substance_fr: string;
  ATC_code: string;
  product_type: string;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  is_active: boolean;
  is_deleted: boolean;
}

export interface ParentProductAuditTrailDto {
  id: number;
  parent_product_id: number;
  action: string;
  updated_by: number;
  updated_at: Date;
  message: string;
}
