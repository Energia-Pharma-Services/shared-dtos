export interface QuestionDto {
  id: number | null;
  name: string | null;
  questionTypeId: number | null;
  questionType: string | null;
  dropdownId: number | null;
  isReadOnly: boolean;
  isRequired: boolean;
}

export interface SubsectionDto {
  id: number | null;
  subsectionText: string | null;
  questions: QuestionDto[];
}

export interface SectionDto {
  id: number | null;
  sectionText: string | null;
  subsections: SubsectionDto[];
}

export interface FormDto {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  sections: SectionDto[];
}

export interface GeneralFormDto {
  id: number;
  name: string;
  createdAt: Date | null;
  createdBy: number;
  updatedAt: Date | null;
  updatedBy: number;
  isActive: boolean | null;
  isDeleted: boolean | null;
}

export interface Section {
  id: number;
  sectionText: string;
  subsections: Subsection[];
}

export interface Subsection {
  id: number;
  subsectionText: string;
  questions: Question[];
}

export interface Question {
  id: number;
  name: string;
  questionTypeId: number | null;
  questionType: string | null;
  dropdownId: number | null;
  isReadOnly: boolean;
  isRequired: boolean;
  include?: boolean;
  questionId?: number;
}

export interface FormRequest {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  sections: Section[];
}

export interface FormSelectFields {
  formId: number;
  formName: string;
  formCreatedAt: Date;
  formUpdatedAt: Date;
  formCreatedBy: number;
  formUpdatedBy: number;
  formIsActive: boolean;
  formIsDeleted: boolean;
  sectionId: number | null;
  sectionText: string | null;
  subsectionId: number | null;
  subsectionText: string | null;
  questionId: number | null;
  questionName: string | null;
  dropdownId: number | null;
  isReadOnly: boolean | null;
  isRequired: boolean | null;
  questionTypeId: number | null;
  questionType: string | null;
}

export interface AuditFields {
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FormBuilderAuditTrailDto {
  id: number;
  formId: number;
  action: string;
  updatedAt: Date;
  changes: Record<string, { new: string; old: string }>;
  updatedBy: string;
}

export interface QuestionChange {
  id?: { new: number | null; old: number | null };
  name?: { new: string | null; old: string | null };
  questionTypeId?: { new: number | null; old: number | null };
  questionType?: { new: string | null; old: string | null };
  dropdownId?: { new: number | null; old: number | null };
  isReadOnly?: { new: boolean; old: boolean };
  isRequired?: { new: boolean; old: boolean };
}

export interface SubsectionChange {
  id?: { new: number | null; old: number | null };
  subsectionText?: { new: string | null; old: string | null };
  questions?: { new: QuestionChange[]; old: null };
}

export interface SectionChange {
  id?: { new: number | null; old: number | null };
  sectionText?: { new: string | null; old: string | null };
  subsections?: SubsectionChange[];
}

export interface FormChanges {
  id?: { new: number; old: number | null };
  isActive?: { new: boolean; old: boolean };
  name?: { new: string; old: string | null };
  sections?: SectionChange[];
}
