import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ICustomer extends Document {
  organizationId: Types.ObjectId;
  type: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: {
    billing: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
    };
    shipping: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
    };
  };
  taxId: string;
  paymentTerms: string;
  creditLimit: number;
  customerGroup: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

const CustomerSchema: Schema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  contactPerson: { type: String },
  email: { type: String },
  phone: { type: String },
  address: {
    billing: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String }
    },
    shipping: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String }
    }
  },
  taxId: { type: String },
  paymentTerms: { type: String },
  creditLimit: { type: Number },
  customerGroup: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

export default mongoose.model<ICustomer>('Customer', CustomerSchema);
