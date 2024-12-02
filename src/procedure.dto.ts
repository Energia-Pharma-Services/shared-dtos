export interface AuditFields {
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DropdownResponse {
  id?: number;
  dropdownId?: number | null;
  dropdownValue: string | null;
  sectionId: number;
  subsectionId: number;
  questionId: number;
  procedureId?: number | null;
}

export interface FormResponse {
  id?: number;
  sectionId: number;
  subsectionId: number;
  questionId: number;
  responseText?: string | null;
  responseDate?: Date | null;
  responseBoolean?: boolean | null;
  responseNumber?: number | null;
  dropdownResponses?: DropdownResponse[] | null;
  dropdownResponse?: DropdownResponse | null;
  procedureId?: number | null;
}

export interface FormResponsePayload {
  templateId: number;
  responses: FormResponse[];
}

export interface SubmittedResponse
  extends Omit<FormResponse, 'dropdownResponses'> {
  questionText: string | null;
  dropdownResponses: DropdownResponse[];
}

export interface TransformedResponse {
  responses: SubmittedResponse[];
}

export interface QuestionText {
  questionId: number;
  questionText: string | null;
}

export interface Procedure {
  id: number;
  templateId: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  responses: SubmittedResponse[];
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
