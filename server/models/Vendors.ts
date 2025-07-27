import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IVendor extends Document {
  organizationId: Types.ObjectId;
  name: string;
  code: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  website: string;
  paymentTerms: string;
  leadTime: number;
  rating: number;
  taxId: string;
  currency: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

const VendorSchema: Schema = new Schema(
  {
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    contactPerson: { type: String },
    email: { type: String },
    phone: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String }
    },
    website: { type: String },
    paymentTerms: { type: String },
    leadTime: { type: Number },
    rating: { type: Number },
    taxId: { type: String },
    currency: { type: String },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model<IVendor>('Vendor', VendorSchema);
