import { ObjectId } from 'mongodb';

export interface InventoryTransaction {
  _id: ObjectId;
  organizationId: ObjectId; // Reference to Organizations
  transactionType: string; // Receive, Issue, Transfer, Adjust, Count
  referenceType: string; // PO, SO, Transfer, Adjustment, Count
  referenceId: ObjectId; // Reference to related document
  productId: ObjectId; // Reference to Products
  fromWarehouseId: ObjectId; // Reference to Warehouses
  fromLocationId: ObjectId; // Reference to Locations
  toWarehouseId: ObjectId; // Reference to Warehouses
  toLocationId: ObjectId; // Reference to Locations
  quantity: number;
  unitCost: number;
  totalCost: number;
  batchId: string;
  serialNumbers: string[];
  reason: string;
  notes: string;
  performedBy: ObjectId; // Reference to Users
  transactionDate: Date;
  createdAt: Date;
}
