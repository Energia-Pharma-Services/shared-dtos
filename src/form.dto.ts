export interface CreateFormDto {
  name: string;
}

export interface UpdateFormDto {
  name?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  updatedBy: number;
  updatedAt: Date;
}

export interface FormDto {
  id: number;
  name: string;
  createdAt: Date | null;
  createdBy: number;
  updatedAt: Date | null;
  updatedBy: number;
  isActive: boolean | null;
  isDeleted: boolean | null;
}

export interface CreateSectionDto {
  sectionText: string;
}

export interface UpdateSectionDto {
  sectionText?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  updatedBy: number;
  updatedAt: Date;
}

export interface SectionDto {
  id: number;
  sectionText: string;
  formId: number;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface CreateSubsectionDto {
  name: string;
}

export interface UpdateSubsectionDto {
  subsectionText?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  updatedAt: Date;
  updatedBy: number;
}

export interface SubsectionDto {
  id: number;
  subsectionText: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  sectionId: number;
  formId: number;
}

export interface CreateQuestionTypeDto {
  type: string;
}

export interface UpdateQuestionTypeDto {
  type?: string;
  isActive?: boolean;
  isDeleted?: boolean;
}

export interface QuestionTypeDto {
  id: number;
  type: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface CreateQuestionDto {
  name: string;
  questionType: number;
  subsectionId: number;
  sectionId: number;
  formId: number;
}

export interface UpdateQuestionDto {
  name?: string;
  questionType?: number;
  subsectionId?: number;
  sectionId?: number;
  formId?: number;
  isActive?: boolean;
  isDeleted?: boolean;
}

export interface QuestionDto {
  id: number;
  name: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  questionType: number;
  subsectionId: number;
  sectionId: number;
  formId: number;
}
