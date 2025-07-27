import { Schema, model, Types } from 'mongoose';

const SalesOrderItemSchema = new Schema({
  productId: { type: Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  totalPrice: { type: Number, required: true },
  pickedQuantity: { type: Number, default: 0 },
  shippedQuantity: { type: Number, default: 0 },
  status: { type: String, enum: ['Pending', 'Partial', 'Complete'], default: 'Pending' }
});

const SalesOrderSchema = new Schema({
  organizationId: { type: Types.ObjectId, ref: 'Organization', required: true },
  orderNumber: { type: String, required: true },
  customerId: { type: Types.ObjectId, ref: 'Customer', required: true },
  warehouseId: { type: Types.ObjectId, ref: 'Warehouse', required: true },
  orderDate: { type: Date, required: true },
  promisedDeliveryDate: { type: Date },
  actualDeliveryDate: { type: Date },
  status: {
    type: String,
    enum: ['Draft', 'Confirmed', 'Picked', 'Packed', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Draft'
  },
  items: [SalesOrderItemSchema],
  subtotal: { type: Number, required: true },
  discountAmount: { type: Number, default: 0 },
  taxAmount: { type: Number, default: 0 },
  shippingCost: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String },
  paymentStatus: { type: String, enum: ['Unpaid', 'Partial', 'Paid'], default: 'Unpaid' },
  shippingMethod: { type: String },
  trackingNumber: { type: String },
  notes: { type: String },
  createdBy: { type: Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default model('SalesOrder', SalesOrderSchema);
