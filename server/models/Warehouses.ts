import { ObjectId } from 'mongodb';

export interface Warehouse {
  _id: ObjectId;
  organizationId: ObjectId; // Reference to Organizations
  name: string;
  code: string;
  type: string; // Primary, Secondary, etc.
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  capacity: number;
  capacityUnit: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
