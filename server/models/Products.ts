import { Schema, model, Types } from 'mongoose';

const ProductSchema = new Schema({
  organizationId: { type: Types.ObjectId, ref: 'Organizations', required: true },
  sku: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  categoryId: { type: Types.ObjectId, ref: 'Categories', required: true },
  unitOfMeasure: String,
  barcode: String,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    unit: String
  },
  weight: {
    value: Number,
    unit: String
  },
  attributes: {
    color: String,
    size: String,
    material: String
    // Add other dynamic attributes as needed
  },
  cost: Number,
  retailPrice: Number,
  wholesalePrice: Number,
  taxRate: Number,
  reorderPoint: Number,
  preferredVendorId: { type: Types.ObjectId, ref: 'Vendors' },
  images: [String],
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

export default model('Product', ProductSchema);
