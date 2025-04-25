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


export const NOTIFICATION_FIELD_NAMES = {
  MA_EXPIRY: 'MA expiry date',
  TEMPORARY_MA: 'Temporary MA Date',
  DOSSIER_SENT: 'Dossier sent',
  DOSSIER_SUBMITTED: 'Dossier submitted',
  MANUFACTURING_LICENSE_EXPIRY: 'manufacturingLicenceExpDate',
  GMP_EXPIRY: 'gmpExpDate',
  GDP_EXPIRY: 'gdpExpDate',
  GMP_TERRITORY_EXPIRY: 'gmpTerritoryExpDate',
} as const;

export interface FieldCheckDefinition {
  fieldName: string;
  responseIn: FieldResponseType;
  interval: string | null;
}

export const FORM_FIELD_TYPE = {
  FORM: 'formResponses',
  MILESTONE: 'milestoneResponses',
} as const;

export const NOTIFICATION_ENTITY_TYPE = {
  CONTACT: 'Contact',
  PROCEDURE: 'Procedure',
} as const;

export type FieldResponseType = typeof FORM_FIELD_TYPE[keyof typeof FORM_FIELD_TYPE];


