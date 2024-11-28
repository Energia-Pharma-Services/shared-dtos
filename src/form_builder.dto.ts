export interface QuestionDto {
  id: number | null;
  name: string | null;
  question_type_id: number | null;
  question_type: string | null;
  dropdownId: number | null;
  isReadOnly: boolean;
  isRequired: boolean;
}

export interface SubsectionDto {
  id: number | null;
  subsection_text: string | null;
  questions: QuestionDto[];
}

export interface SectionDto {
  id: number | null;
  section_text: string | null;
  subsections: SubsectionDto[];
}

export interface FormDto {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  created_by: number;
  updated_by: number;
  is_active: boolean;
  is_deleted: boolean;
  sections: SectionDto[];
}

export interface GeneralFormDto {
  id: number;
  name: string;
  created_at: Date | null;
  created_by: number;
  updated_at: Date | null;
  updated_by: number;
  is_active: boolean | null;
  is_deleted: boolean | null;
}
