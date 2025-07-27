import { Schema, model, Types } from 'mongoose';

const ReportSchema = new Schema(
  {
    organizationId: { type: Types.ObjectId, ref: 'Organization', required: true }, // Reference to Organizations
    name: { type: String, required: true },
    type: { type: String, required: true }, // Inventory Value, Stock Status, Purchase Analysis, etc.
    parameters: {
      startDate: { type: Date },
      endDate: { type: Date },
      warehouseIds: [{ type: Types.ObjectId, ref: 'Warehouse' }],
      categoryIds: [{ type: Types.ObjectId, ref: 'Category' }],
      productIds: [{ type: Types.ObjectId, ref: 'Product' }]
    },
    format: { type: String }, // PDF, Excel, CSV
    generatedBy: { type: Types.ObjectId, ref: 'User' }, // Reference to Users
    generatedAt: { type: Date },
    fileUrl: { type: String }, // URL or GridFS reference
    status: { type: String } // Pending, Generated, Failed
  },
  { timestamps: true }
);

export default model('Report', ReportSchema);
