import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPurchaseOrderItem {
  productId: Types.ObjectId;
  quantity: number;
  unitCost: number;
  totalCost: number;
  receivedQuantity: number;
  status: string; // Pending, Partial, Complete
}

export interface IPurchaseOrder extends Document {
  organizationId: Types.ObjectId;
  poNumber: string;
  vendorId: Types.ObjectId;
  warehouseId: Types.ObjectId;
  orderDate: Date;
  expectedDeliveryDate: Date;
  status: string; // Draft, Submitted, Approved, Received, Cancelled
  items: IPurchaseOrderItem[];
  subtotal: number;
  taxAmount: number;
  shippingCost: number;
  totalAmount: number;
  paymentTerms: string;
  paymentStatus: string; // Unpaid, Partial, Paid
  notes: string;
  createdBy: Types.ObjectId;
  approvedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const PurchaseOrderItemSchema = new Schema<IPurchaseOrderItem>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  unitCost: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  receivedQuantity: { type: Number, default: 0 },
  status: { type: String, enum: ['Pending', 'Partial', 'Complete'], default: 'Pending' }
});

const PurchaseOrderSchema = new Schema<IPurchaseOrder>({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  poNumber: { type: String, required: true },
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true },
  warehouseId: { type: Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  orderDate: { type: Date, required: true },
  expectedDeliveryDate: { type: Date, required: true },
  status: { type: String, enum: ['Draft', 'Submitted', 'Approved', 'Received', 'Cancelled'], default: 'Draft' },
  items: { type: [PurchaseOrderItemSchema], required: true },
  subtotal: { type: Number, required: true },
  taxAmount: { type: Number, required: true },
  shippingCost: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  paymentTerms: { type: String },
  paymentStatus: { type: String, enum: ['Unpaid', 'Partial', 'Paid'], default: 'Unpaid' },
  notes: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  approvedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPurchaseOrder>('PurchaseOrder', PurchaseOrderSchema);
