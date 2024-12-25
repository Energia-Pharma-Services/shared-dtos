export interface CreateMilestoneTemplateDto {
  milestoneTemplateName: string;
  milestoneTemplateFields?: number[];
}

export interface MilestoneTemplateRequest {
  milestoneTemplateName: string;
  milestones?: number[];
}

export interface TransformMilestoneTemplateDto {
  id: number;
  templateName: string;
  isActive: boolean;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isDeleted: boolean;
  templateFields: {
    milestoneId: number | null;
    milestoneText: string | null;
    milestoneType: string | null;
  }[];
}

export interface UpdateMilestoneTemplateDto {
  milestoneTemplateName?: string;
  milestoneTemplateFields?: number[];
  isActive?: boolean;
  isDeleted?: boolean;
}

export interface MilestoneTemplateParamDto {
  id: number;
}

export interface MilestoneTemplateDto {
  id: number;
  milestoneTemplateName: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  milestones: number[];
}

export interface MilestoneTemplateFieldDto {
  milestoneId: number;
  milestoneTemplateId: number;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface MilestoneDto {
  id: number;
  milestoneText: string;
  questionType: number;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface AuditFields {
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
}

export interface MilestoneTemplateAuditChanges {
  templateName?: { new: string | null; old: string | null };
  templateFields?: {
    old: {
      milestoneId: number | null;
      milestoneText: string | null;
      milestoneType: string | null;
    } | null;
    new: {
      milestoneId: number | null;
      milestoneText: string | null;
      milestoneType: string | null;
    } | null;
  }[];
}

export interface MilestoneFields {
  milestoneId: number | null;
  milestoneText: string | null;
  milestoneType: string | null;
}

export interface FieldsToInsert {
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  isActive: boolean;
  isDeleted: boolean;
  milestoneTemplateId: number;
  milestoneId: number;
}

export interface MilestoneTemplateAuditTrailDto {
  changes: Record<
    string,
    {
      new: string;
      old: string;
    }
  >;
  updatedBy: string;
  id: number;
  updatedAt: Date;
  milestoneTemplateId: number;
  action: string;
}

export interface MilestoneAuditTrailWithUser {
  milestoneTemplateId: number;
  id: number;
  updatedBy: number;
  updatedAt: Date;
  action: string;
  changes: unknown;
  username: string | null;
}
