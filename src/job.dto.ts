export interface JobDto {
    id: number;
    interval: string | null;
    triggerDate: Date | null;
    type: 'temporary_ma_date' | 'ma_expiry_date' | string;
    procedureId: number;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateJobDto {
    interval: string | null;
    triggerDate?: Date | null;  // ✅ Allows optional null values
    type: 'temporary_ma_date' | 'ma_expiry_date' | string;
    data: {
        procedureId: number;
        message: string;
    };
}

export interface UpdateJobDto {
    interval?: string | null;
    triggerDate?: Date | null;  // ✅ Ensures compatibility with updates
    type?: 'temporary_ma_date' | 'ma_expiry_date' | string;
    data?: {
        procedureId?: number;
        message?: string;
    };
}
