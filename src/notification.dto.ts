export interface NotificationDto {
  id: number;
  entityId: number;
  entityType: string;
  username: string;
  status: string;
  fieldName: string;
  productCode?: string | null;
  procedureCountry?: string | null;
  companyDisplayName?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkNotificationAsReadDto {
  notificationId: number;
  status: string;
}
