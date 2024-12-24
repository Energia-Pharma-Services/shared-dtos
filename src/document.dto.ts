export interface DocumentList{
    id: number;
    entityType: string;
    entityId: number;
    fileName: string;
    filePath: string;
    updatedBy: string | null;
    updatedAt: Date;
}