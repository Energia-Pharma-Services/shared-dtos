export interface AuditFields {
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DropdownResponseMain {
  id?: number;
  dropdownId?: number | null;
  dropdownValue: string | null;
  sectionId: number;
  subsectionId: number;
  formFieldId: number;
  procedureId?: number | null;
}
export interface ProcedureDto {
  id: number;
  templateName: string | null;
  genericName: string;
  templateId: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  isActive: boolean;
  isDeleted: boolean;
  responses: SubmittedResponse[];
  milestoneResponses: MilestoneResponse[];
  teamMembers?: string[] | null;
}

export interface MinimalProcedureDto {
  id: number;
  genericName: string;
  templateId: number;
  templateName: string | null;
  responses: SubmittedResponse[];
  isActive: boolean;
}
export interface FormResponseMain {
  id?: number;
  sectionId: number;
  subsectionId: number;
  subsectionName: string;
  formFieldId: number;
  response?: string | null; // TODO: Add FormField Types instead of any
  responseType?: number | null;
  dropdownResponses?: DropdownResponseMain[] | null;
  dropdownResponse?: DropdownResponseMain | null;
  procedureId?: number | null;
}

export interface MilestoneResponsePayload {
  milestoneId: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any | null; // TODO: Add FormField Types instead of any
}
export interface PartialMilestoneResponse {
  id: number;
  milestoneId: number;
}
export interface MilestoneResponse {
  id: number | null;
  milestoneId: number | null;
  milestoneText: string | null;
  milestoneType: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any | null; // TODO: Add FormField Types instead of any
  fieldType: string | null;
  updatedBy: string;
  updatedAt: Date;
}
export interface FormResponsePayload {
  genericName: string;
  templateId: number;
  milestoneTemplateId: number;
  milestoneResponses?: MilestoneResponsePayload[] | null;
  responses: FormResponseMain[];
  teamMembers?: string[];
}

export interface SubmittedResponse
  extends Omit<FormResponseMain, 'dropdownResponses'> {
  formFieldText: string | null;
  dropdownResponses: DropdownResponseMain[];
}

export interface TransformedResponse {
  responses: SubmittedResponse[];
}

export interface FormFieldText {
  formFieldId: number;
  formFieldText: string | null;
}

export interface ProcedureMain {
  id: number;
  templateId: number;
  genericName: string;
  templateName: string | null;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  isActive: boolean;
  isDeleted: boolean;
  responses: SubmittedResponse[];
  submittedResponses?: SubmittedResponse[];
  milestoneResponses?: MilestoneResponse[];
}

export interface FormResponseEntries {
  sectionId: number;
  subsectionId: number;
  formFieldId: number;
  response: string | null;
  responseType: number | null;
  procedureId: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  isActive: boolean;
  isDeleted: boolean;
}

export interface UpdateProcedurePayload {
  genericName: string;
  templateId: number;
  milestoneTemplateId: number;
  teamMembers?: string[];
  updatedAt: Date;
  updatedBy: string;
}

export interface DeleteProcedurePayload {
  isDeleted: boolean;
  isActive: boolean;
  updatedBy: string;
  updatedAt: Date;
}

export interface Response {
  sectionId: number;
  sectionName: string | null;
  subsectionId: number | null;
  subsectionName: string | null;
  formFieldId: number | null;
  formFieldText: string | null;
  response: string | null;
  responseType: number | null;
  dropdownResponses: DropdownResponseMain[];
  dropdownResponse: DropdownResponseMain | null;
}

export interface FormattedResponse {
  sectionId: number;
  sectionName: string;
  subsections: {
    subsectionId: number | null;
    subsectionName: string | null;
    formFields: {
      formFieldId: number;
      formFieldText: string;
      response: string | null;
      responseType: number | null;
      dropdownResponses: DropdownResponseMain[];
      dropdownResponse: DropdownResponseMain | null;
    }[];
  }[];
}

export interface DpmFeedbackDto {
  id: number;
  feedback: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  procedureId: number;
}

export interface CreateFeedbackPayload {
  feedback: string;
  procedureId: number;
}

export interface ProcedureAuditTrailDto {
  id: number;
  procedureId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}

/* eslint-disable @typescript-eslint/naming-convention */
export const procedureTypes = {
  NEW: 'New',
  VARIATION: 'Variation',
  RENEWAL: 'Renewal',
  RE_REGISTERATION: 'Re-registration',
} as const;

export type ProcedureTypeEntites =
  (typeof procedureTypes)[keyof typeof procedureTypes];

export const authorisationStatus = {
  PLANNED: 'Planned',
  PENDING: 'Pending',
  QUERIES: 'Queries',
  VALID: 'Valid',
  REJECTED: 'Rejected',
  WITHDRAWN: 'Withdrawn',
  NOT_RENEWED: 'Not renewed',
} as const;

export type AuthorisationStatusEntites =
  (typeof authorisationStatus)[keyof typeof authorisationStatus];

export const variationReason = {
  PRICE_REDUCTION: 'Price reduction',
  PRICE_INCREASE: 'Price increase',
  ADMINISTRATIVE: 'Administrative',
  MANUFACTURER_API: 'Manufacturer API',
  MANUFACTURER_FP: 'Manufacturer FP',
  PACKAGING_AW: 'Packaging / AW',
  SHELF_LIFE: 'Shelf-life',
  LEAFLET_SMPC: 'Leaflet / SmPC',
  OTHER: 'other',
} as const;

export type VariationReasonEntites =
  (typeof variationReason)[keyof typeof variationReason];


export interface DocumentTemplatePlaceholdersKeys {
  generic_name: string;
  country: string;
  product_code: string;
  product_type: string;
  ma_holder: string;
  product_name: string;
  pharmaceutical_form: string;
  active_substance: string;
  atc_code: string;
  strength: string;
  packaging_type: string;
  pack_size: string;
  route_of_administration: string;
  storage_conditions: string;
  shelf_life: string;
  product_eur_price: string;
  product_fcfa_price: string;
  manufacturer_finished_product: string;
  // MA Holder Contact Details
  ma_holder_company_name: string;
  ma_holder_telephone: string;
  ma_holder_email: string;
  ma_holder_address: string;
  ma_holder_country: string;
  ma_holder_website: string;
  ma_holder_contact_name: string;
  ma_holder_contact_position: string;
  ma_holder_contact_email: string;

  // Ministry of Health Contact Details
  ministry_of_health_company_name: string;
  ministry_of_health_address: string;
  ministry_of_health_country: string;

  // LTR Contact Details
  ltr_company_name: string;
  ltr_company_address: string;
  ltr_company_telephone: string;
  ltr_company_country: string;
  ltr_contact_name: string;
  ltr_contact_position: string;

  current_date: string
}

export interface ProcedureFilterParams {
  authorisationStatus?: string[];
  teamMembers?: string[];
  procedureType?: string;
  productCode?: string;
}


export interface ProcedureRoleStats {
  label: string;
  value: number;
}

export interface ProcedureStatusStats {
  label: string;
  value: number;
}

export interface ProcedureKpiStats {
  completed: number;
  overdue: number;
  total: number;
}

export interface RecentActivityItem {
  message: string;
  procedureCode: string;
  country: string;
  actionType?: string;
}

export interface RecentVisitItem {
  procedureCode: string;
  country: string;
  visitedAt: string;
}

export interface DashboardDto {
  kpiStats: ProcedureKpiStats;
  openProceduresByRole: ProcedureRoleStats[];
  proceduresByStatus: ProcedureStatusStats[];
  recentActivities: RecentActivityItem[];
  recentVisitedProcedures: RecentVisitItem[];
}


/* eslint-enable @typescript-eslint/naming-convention */
