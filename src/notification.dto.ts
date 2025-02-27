export interface NotificationDto {
  id: number;
  entityId: number;
  entityType: string;
  username: string;
  status: string;
  fieldName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkNotificationAsReadDto {
  notificationId: number;
  status: string;
}
