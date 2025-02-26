export interface JobDto {
    id: number;
    interval: string | null;
    triggerDate: Date | null;
    fieldName: string;
    procedureId: number;
    createdAt: Date;
    updatedAt: Date;
}

export type CreateJobDto =
    Pick<JobDto, 'interval' | 'triggerDate' | 'fieldName' | 'procedureId'>

export type UpdateJobDto = Partial<CreateJobDto>;

