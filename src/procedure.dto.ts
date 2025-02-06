export interface AuditFields {
  createdBy: number;
  updatedBy: number;
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
  createdBy: number;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  responses: SubmittedResponse[];
  milestoneResponses: MilestoneResponse[];
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
  response: any | null; // TODO: Add FormField Types instead of any
  fieldType: string | null;
  updatedBy: number;
  updatedAt: Date;
}
export interface FormResponsePayload {
  genericName: string;
  templateId: number;
  milestoneResponses?: MilestoneResponsePayload[] | null;
  responses: FormResponseMain[];
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
  templateName: string | null;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
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
  createdBy: number;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface UpdateProcedurePayload {
  genericName: string;
  templateId: number;
  updatedAt: Date;
  updatedBy: number;
}

export interface DeleteProcedurePayload {
  isDeleted: boolean;
  isActive: boolean;
  updatedBy: number;
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

export interface ProcedureAuditTrailDto {
  id: number;
  procedureId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}

export const procedureTypes = {
  NEW: 'New',
  VARIATION: 'Variation',
  RENEWAL: 'Renewal',
  REREGISTERATION: 'Re-registration'
} as const;

export type ProcedureTypeEntites =
  (typeof procedureTypes)[keyof typeof procedureTypes];