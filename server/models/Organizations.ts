import { ObjectId } from 'mongodb';

export interface Organization {
  _id: ObjectId;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  contactEmail: string;
  contactPhone: string;
  subscription: {
    plan: string;
    startDate: Date;
    endDate: Date;
    status: string;
  };
  settings: {
    currency: string;
    timezone: string;
    dateFormat: string;
  };
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
