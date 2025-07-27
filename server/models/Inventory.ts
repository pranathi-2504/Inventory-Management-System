import { ObjectId } from 'mongodb';

export interface Inventory {
  _id: ObjectId;
  organizationId: ObjectId; // Reference to Organizations
  productId: ObjectId; // Reference to Products
  warehouseId: ObjectId; // Reference to Warehouses
  locationId: ObjectId; // Reference to Locations
  batchId: string;
  serialNumbers: string[];
  quantity: number;
  availableQuantity: number; // Quantity - Reserved
  reservedQuantity: number;
  minQuantity: number;
  maxQuantity: number;
  expirationDate: Date;
  manufactureDate: Date;
  lastCountDate: Date;
  status: string; // In Stock, Low Stock, Out of Stock
  createdAt: Date;
  updatedAt: Date;
}
