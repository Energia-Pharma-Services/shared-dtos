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
  questionId: number;
  procedureId?: number | null;
}

export interface FormResponseMain {
  id?: number;
  sectionId: number;
  subsectionId: number;
  questionId: number;
  responseText?: string | null;
  responseDate?: Date | null;
  responseBoolean?: boolean | null;
  responseNumber?: number | null;
  dropdownResponses?: DropdownResponseMain[] | null;
  dropdownResponse?: DropdownResponseMain | null;
  procedureId?: number | null;
}

export interface MilestoneResponsePayload {
  id: number;
  responseDate?: Date | null;
  responseCheckbox?: boolean | null;
}
export interface PartialMilestoneResponse {
  id: number;
  templateFieldId: number;
}
export interface MilestoneResponse {
  id: number | null;
  masterFieldId: number | null;
  milestoneText: string | null;
  milestoneType: string | null;
  responseDate?: Date | null;
  responseCheckbox?: boolean | null;
}
export interface FormResponsePayload {
  templateId: number;
  milestoneResponses?: MilestoneResponsePayload[] | null;
  responses: FormResponseMain[];
}

export interface SubmittedResponse
  extends Omit<FormResponseMain, 'dropdownResponses'> {
  questionText: string | null;
  dropdownResponses: DropdownResponseMain[];
}

export interface TransformedResponse {
  responses: SubmittedResponse[];
}

export interface QuestionText {
  questionId: number;
  questionText: string | null;
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
  questionId: number;
  responseText: string | null;
  responseDate: Date | null;
  responseNumber: number | null;
  responseBoolean: boolean | null;
  procedureId: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface UpdateProcedurePayload {
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
  questionId: number | null;
  questionText: string | null;
  responseText: string | null;
  responseDate: Date | null;
  responseBoolean: boolean | null;
  responseNumber: number | null;
  dropdownResponses: DropdownResponseMain[];
  dropdownResponse: DropdownResponseMain | null;
}

export interface FormattedResponse {
  sectionId: number;
  sectionName: string;
  subsections: {
    subsectionId: number | null;
    subsectionName: string | null;
    questions: {
      questionId: number;
      questionText: string;
      responseText: string | null;
      responseDate: Date | null;
      responseBoolean: boolean | null;
      responseNumber: number | null;
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
