interface BaseContactDto {
  relation_type: string;
  relation_type_id: number;
  company_type: string;
  company_type_id: number;
  company_name: string;
  company_display_name?: string | null;
  company_address?: string | null;
  company_country_id?: number | null;
  company_country?: string | null;
  company_telephone_number?: string | null;
  company_email?: string | null;
  company_vat_number?: string | null;
  title_id?: number | null;
  title?: string | null;
  name?: string | null;
  email?: string | null;
  first_name?: string | null;
  position?: string | null;
  department_id?: number | null;
  department?: string | null;
  telephone_number?: string | null;
  manufacturing_licence_exp_date?: Date | null;
  gmp_exp_date?: Date | null;
  gdp_exp_date?: Date | null;
  gmp_territory?: boolean | null;
  gmp_territory_exp_date?: Date | null;
  is_active?: boolean;
}

interface BaseContactSiteDto {
  site_name?: string | null;
  site_type?: string | null;
  site_type_id?: number | null;
  address?: string | null;
  country?: string | null;
  country_id?: number | null;
  telephone_number?: string | null;
  email?: string | null;
  vat_number?: string | null;
}

export interface GeneralInformationDto {
  relation_type: string;
  relation_type_id: number;
}

export interface ContactDto extends BaseContactDto {
  id: number;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
  sites?: ContactSiteDto[];
}

export type CreateContactSiteDto = BaseContactSiteDto;

export interface ContactSiteDto extends BaseContactSiteDto {
  id: number;
  contact_id: number | null;
  is_active: boolean;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface ContactWithSitesDto extends ContactDto {
  sites: ContactSiteDto[];
}

export interface CompanyInformationDto {
  company_type: string;
  company_type_id: number;
  company_name: string;
  company_display_name: string | null;
  company_address: string | null;
  company_country_id: number | null;
  company_country: string | null;
  company_telephone_number: string | null;
  company_email: string | null;
  company_vat_number: string | null;
}

export interface ContactInformationDto {
  title_id: number | null;
  title: string | null;
  name: string | null;
  first_name: string | null;
  position: string | null;
  department_id: number | null;
  department: string | null;
  telephone_number: string | null;
  email: string | null;
}

export interface LicenseInformationDto {
  manufacturing_licence_exp_date: Date | null;
  gmp_exp_date: Date | null;
  gdp_exp_date: Date | null;
  gmp_territory: boolean | null;
  gmp_territory_exp_date: Date | null;
}

export interface TransformContactDto {
  id: number;
  generalInformation: GeneralInformationDto;
  companyInformation: CompanyInformationDto;
  contactInformation: ContactInformationDto;
  licenseInformation: LicenseInformationDto;
  siteInformation: ContactSiteDto[];
}

export interface ContactAuditTrailDto {
  id: number;
  contact_id: number;
  action: string;
  updated_by: number;
  updated_at: Date;
  message: string;
}
