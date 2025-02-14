export interface NotificationDto {
  id: number;
  username: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkNotificationAsReadDto {
  notificationId: number;
  status: string;
}
