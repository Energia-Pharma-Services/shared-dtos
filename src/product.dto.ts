interface Timestamps {
  created_at: Date;
  updated_at: Date;
}

interface UserActions {
  created_by: number;
  updated_by: number;
}

export interface CountryDto {
  country_name: string;
  country_name_id: number;
  eur_price: string | null;
  fcfa_price: string | null;
}

export interface ManufacturerDto {
  manufacturer_id: number;
  manufacturer_name: string;
}

export interface ActiveSubstanceManufacturerDto {
  active_substance_manufacturer_id: number;
  manufacturer_name: string;
}

export interface TransformProductDto extends UserActions, Timestamps {
  id: number;
  generalInformation: {
    product_code: string;
    parent_product_code: string;
    product_name: string;
    active_substance_en: string;
    active_substance_fr: string;
    product_type: string;
    ATC_code: string;
    parent_product_id: number;
    strength: string | null;
    pharmaceutical_form: string | null;
    remarks: string | null;
    shelf_life: number | null;
    manufacturers?: ManufacturerDto[];
    active_substance_manufacturers?: ActiveSubstanceManufacturerDto[];
    countries: CountryDto[] | [];
  };

  presentationInformation?: {
    storage_conditions: number | null;
    storage_conditions_after_open: number | null;
    packaging_type: string | null;
    languages_on_pack: string | null;
    pack_size: string | null;
    route_of_administration: string | null;
  };
  is_active: boolean;
  is_deleted: boolean;
}

export interface ProductMinimalDto extends UserActions, Timestamps {
  id: number;
  product_code: string;
  parent_product_id: number;
  strength: string | null;
  pharmaceutical_form: string | null;
  remarks: string | null;
  shelf_life: number | null;
  storage_conditions: number | null;
  storage_conditions_after_open: number | null;
  packaging_type: string | null;
  languages_on_pack: string | null;
  pack_size: string | null;
  route_of_administration: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface ProductWithParentProduct {
  products: {
    id: number;
    product_code: string;
    parent_product_id: number;
    strength: string | null;
    pharmaceutical_form: string | null;
    remarks: string | null;
    shelf_life: number | null;
    storage_conditions: number | null;
    storage_conditions_after_open: number | null;
    packaging_type: string | null;
    languages_on_pack: string | null;
    pack_size: string | null;
    route_of_administration: string | null;
    is_active: boolean;
    is_deleted: boolean;
  };
  parent_products: {
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
  };
}

export interface ProductAuditTrailDto {
  id: number;
  product_id: number;
  action: string;
  updated_by: number;
  updated_at: Date;
  message: string;
}
