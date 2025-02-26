export interface NotificationDto {
  id: number;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkNotificationAsReadDto {
  notificationId: number;
  status: string;
}
