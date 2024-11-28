export interface CreateFormDto {
  name: string;
}

export interface UpdateFormDto {
  name?: string;
  is_active?: boolean;
  is_deleted?: boolean;
  updated_by: number;
  updated_at: Date;
}

export interface FormDto {
  id: number;
  name: string;
  created_at: Date | null;
  created_by: number;
  updated_at: Date | null;
  updated_by: number;
  is_active: boolean | null;
  is_deleted: boolean | null;
}

export interface CreateSectionDto {
  section_text: string;
}

export interface UpdateSectionDto {
  section_text?: string;
  is_active?: boolean;
  is_deleted?: boolean;
  updated_by: number;
  updated_at: Date;
}

export interface SectionDto {
  id: number;
  section_text: string;
  form_id: number;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  is_active: boolean;
  is_deleted: boolean;
}

export interface CreateSubsectionDto {
  name: string;
}

export interface UpdateSubsectionDto {
  subsection_text?: string;
  is_active?: boolean;
  is_deleted?: boolean;
  updated_at: Date;
  updated_by: number;
}

export interface SubsectionDto {
  id: number;
  subsection_text: string;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  is_active: boolean;
  is_deleted: boolean;
  section_id: number;
  form_id: number;
}

export interface CreateQuestionTypeDto {
  type: string;
}

export interface UpdateQuestionTypeDto {
  type?: string;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface QuestionTypeDto {
  id: number;
  type: string;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  is_active: boolean;
  is_deleted: boolean;
}

export interface CreateQuestionDto {
  name: string;
  question_type: number;
  subsection_id: number;
  section_id: number;
  form_id: number;
}

export interface UpdateQuestionDto {
  name?: string;
  question_type?: number;
  subsection_id?: number;
  section_id?: number;
  form_id?: number;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface QuestionDto {
  id: number;
  name: string;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  is_active: boolean;
  is_deleted: boolean;
  question_type: number;
  subsection_id: number;
  section_id: number;
  form_id: number;
}
