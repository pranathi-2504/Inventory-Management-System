import { ObjectId } from 'mongodb';

export interface InventoryCountItem {
  productId: ObjectId; // Reference to Products
  locationId: ObjectId; // Reference to Locations
  expectedQuantity: number;
  countedQuantity: number;
  discrepancy: number;
  notes: string;
  countedBy: ObjectId; // Reference to Users
  countedAt: Date;
  status: string; // Pending, Counted, Adjusted
}

export interface InventoryCount {
  _id: ObjectId;
  organizationId: ObjectId; // Reference to Organizations
  countNumber: string;
  warehouseId: ObjectId; // Reference to Warehouses
  status: string; // Planned, In Progress, Completed, Cancelled
  countType: string; // Cycle Count, Full Inventory
  startDate: Date;
  endDate: Date;
  items: InventoryCountItem[];
  createdBy: ObjectId; // Reference to Users
  approvedBy: ObjectId; // Reference to Users
  createdAt: Date;
  updatedAt: Date;
}
