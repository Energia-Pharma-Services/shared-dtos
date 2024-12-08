interface BaseContactDto {
  relationType: string;
  relationTypeId: number;
  companyType: string;
  companyTypeId: number;
  companyName: string;
  companyDisplayName?: string | null;
  companyAddress?: string | null;
  companyCountryId?: number | null;
  companyCountry?: string | null;
  companyTelephoneNumber?: string | null;
  companyEmail?: string | null;
  companyVatNumber?: string | null;
  titleId?: number | null;
  title?: string | null;
  name?: string | null;
  email?: string | null;
  firstName?: string | null;
  position?: string | null;
  departmentId?: number | null;
  department?: string | null;
  telephoneNumber?: string | null;
  manufacturingLicenceExpDate?: Date | null;
  gmpExpDate?: Date | null;
  gdpExpDate?: Date | null;
  gmpTerritory?: boolean | null;
  gmpTerritoryExpDate?: Date | null;
  isActive?: boolean;
}

interface BaseContactSiteDto {
  siteName: string;
  siteType: string;
  siteTypeId: number;
  address: string | null;
  country: string | null;
  countryId: number | null;
  telephoneNumber: string | null;
  email: string | null;
  vatNumber: string | null;
}

export interface GeneralInformationDto {
  relationType: string;
  relationTypeId: number;
}

export interface ContactDto extends BaseContactDto {
  id: number;
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  sites?: ContactSiteDto[];
}

export type CreateContactSiteDto = BaseContactSiteDto;

export interface ContactSiteDto extends BaseContactSiteDto {
  id: number;
  contactId: number | null;
  isActive: boolean;
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactWithSitesDto extends ContactDto {
  sites: ContactSiteDto[];
}

export interface CompanyInformationDto {
  companyType: string;
  companyTypeId: number;
  companyName: string;
  companyDisplayName: string | null;
  companyAddress: string | null;
  companyCountryId: number | null;
  companyCountry: string | null;
  companyTelephoneNumber: string | null;
  companyEmail: string | null;
  companyVatNumber: string | null;
}

export interface ContactInformationDto {
  titleId: number | null;
  title: string | null;
  name: string | null;
  firstName: string | null;
  position: string | null;
  departmentId: number | null;
  department: string | null;
  telephoneNumber: string | null;
  email: string | null;
}

export interface LicenseInformationDto {
  manufacturingLicenceExpDate: Date | null;
  gmpExpDate: Date | null;
  gdpExpDate: Date | null;
  gmpTerritory: boolean | null;
  gmpTerritoryExpDate: Date | null;
}

export interface TransformContactDto {
  id: number;
  generalInformation: GeneralInformationDto;
  companyInformation: CompanyInformationDto;
  contactInformation: ContactInformationDto;
  licenseInformation: LicenseInformationDto;
  siteInformation: ContactSiteDto[];
  isActive: boolean;
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactAuditTrailDto {
  id: number;
  contactId: number;
  action: string;
  updatedBy: number;
  updatedAt: Date;
  message: string;
}

export interface LicenseInformation {
  manufacturingLicenceExpDate: string | null;
  gmpExpDate: string | null;
  gdpExpDate: string | null;
  gmpTerritory: boolean | null;
  gmpTerritoryExpDate: string | null;
}

export interface ContactRequestPayload {
  generalInformation: GeneralInformationDto;
  companyInformation: CompanyInformationDto;
  contactInformation: ContactInformationDto;
  licenseInformation: LicenseInformation;
  siteInformation: ContactSiteDto[];
  isActive?: boolean;
}

export interface DeleteContactPayload {
  isDeleted: boolean;
  isActive: boolean;
  updatedBy: number;
  updatedAt: Date;
}

export interface ContactRequestParam {
  contactId: string;
}

export interface ContactRequestQueryParam {
  limit: string;
  page: string;
  searchTerm: string;
}

export interface AuditFields {
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ContactAuditTrail {
  id: number;
  contactId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}
