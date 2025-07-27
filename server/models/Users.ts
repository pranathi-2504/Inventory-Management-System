import { Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  organizationId: Types.ObjectId; // Reference to Organizations
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: string; // Admin, Manager, Staff, etc.
  permissions: string[];
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export const UserSchema = new Schema<IUser>({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  permissions: [{ type: String }],
  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});
