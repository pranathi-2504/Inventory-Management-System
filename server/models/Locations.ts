import { Types } from 'mongoose';

export interface Location {
  _id: Types.ObjectId;
  organizationId: Types.ObjectId; // Reference to Organizations
  warehouseId: Types.ObjectId; // Reference to Warehouses
  name: string;
  code: string;
  type: string; // Shelf, Bin, Pallet, etc.
  aisle: string;
  rack: string;
  shelf: string;
  bin: string;
  capacity: number;
  capacityUnit: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
