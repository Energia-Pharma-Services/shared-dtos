import { CompanyTypeEntitesForProducts } from "./contact.dto";

interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

interface UserActions {
  createdBy: number;
  updatedBy: number;
}

export interface CountryDto {
  countryName: string;
  countryNameId: number;
  eurPrice: string | null;
  fcfaPrice: string | null;
}

export interface ManufacturerDto {
  id: number;
  name: string;
  type: CompanyTypeEntitesForProducts;
}

export interface GeneralInformation {
  productCode: string;
  parentProductCode: string;
  productName: string;
  activeSubstanceEn: string;
  activeSubstanceFr: string;
  productType: string;
  atcCode: string;
  maHolder: string | null;
  parentProductId: number;
  strength: string | null;
  pharmaceuticalForm: string | null;
  remarks: string | null;
  shelfLife: number | null;
  manufacturers?: ManufacturerDto[];
  countries: CountryDto[] | [];
}

export interface PresentationInformation {
  storageConditions: string | null;
  storageConditionsAfterOpen: string | null;
  packagingType: string | null;
  languagesOnPack: string | null;
  packSize: string | null;
  routeOfAdministration: string | null;
}
export interface TransformProductDto extends UserActions, Timestamps {
  id: number;
  generalInformation: GeneralInformation;
  presentationInformation?: PresentationInformation;
  isActive: boolean;
  isDeleted: boolean;
}

export interface RequestBody {
  generalInformation: GeneralInformation;
  presentationInformation: PresentationInformation;
}

export interface ProductMinimalDto extends UserActions, Timestamps {
  id: number;
  productCode: string;
  parentProductId: number;
  strength: string | null;
  pharmaceuticalForm: string | null;
  remarks: string | null;
  shelfLife: number | null;
  storageConditions: string | null;
  storageConditionsAfterOpen: string | null;
  packagingType: string | null;
  languagesOnPack: string | null;
  packSize: string | null;
  routeOfAdministration: string | null;
  isActive: boolean;
  isDeleted: boolean;
}

export interface ProductMain {
  id: number;
  productCode: string;
  parentProductId: number;
  strength: string | null;
  pharmaceuticalForm: string | null;
  remarks: string | null;
  maHolder: string | null;
  shelfLife: number | null;
  storageConditions: string | null;
  storageConditionsAfterOpen: string | null;
  packagingType: string | null;
  languagesOnPack: string | null;
  packSize: string | null;
  routeOfAdministration: string | null;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
}

export interface ParentProductMain {
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
export interface ProductWithParentProduct {
  products: ProductMain;
  parentProducts: ParentProductMain;
}

export interface ProductAuditTrailDto {
  id: number;
  productId: number;
  action: string;
  updatedBy: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
}

export interface ProductToUpdate {
  productCode: string;
  parentProductId: number;
  strength: string | null;
  pharmaceuticalForm: string | null;
  remarks: string | null;
  shelfLife: number | null;
  maHolder: string | null;
  storageConditions: string | null;
  storageConditionsAfterOpen: string | null;
  packagingType: string | null;
  languagesOnPack: string | null;
  packSize?: string | null;
  routeOfAdministration: string | null;
  updatedBy: number;
  updatedAt: Date;
}

export interface AuditFields {
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DeleteProduct {
  isDeleted: boolean;
  isActive: boolean;
  updatedBy: number;
  updatedAt: Date;
}

export interface ManufacturerEntries {
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  manufacturerId: number;
  manufacturerName: string;
}

export interface CountryEntries {
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  countryName: string;
  countryNameId: number;
  eurPrice: string | null;
  fcfaPrice: string | null;
}

/* eslint-disable @typescript-eslint/naming-convention */
export const productTypes = {
  OTC: 'OTC',
  FOOD_SUP: 'Food supplement',
  PHARMA_PRODCUT: 'Pharmaceutical product',
  PHARMA_LISTE1: 'Pharma Liste 1',
  PHARMA_LISTE2: 'Pharma Liste 2',
  Medical_Device: 'Medical device',
} as const;

export type ProductTypeEntites =
  (typeof productTypes)[keyof typeof productTypes];

/* eslint-enable @typescript-eslint/naming-convention */