export interface JobDto {
    id: number;
    interval: string | null;
    triggerDate: Date | null;
    fieldName: string;
    entityId: number;
    entityType: string;
    createdAt: Date;
    updatedAt: Date;
}

export type CreateJobDto =
    Pick<JobDto, 'interval' | 'triggerDate' | 'fieldName' | 'entityId' | 'entityType'>

export type UpdateJobDto = Partial<CreateJobDto>;

