import { Schema, Types } from 'mongoose';

const CategorySchema = new Schema({
  organizationId: { type: Types.ObjectId, ref: 'Organization', required: true }, // Reference to Organizations
  name: { type: String, required: true },
  description: { type: String },
  parentCategoryId: { type: Types.ObjectId, ref: 'Category' }, // Self-reference for hierarchy
  attributes: [
    {
      name: { type: String, required: true },
      dataType: { type: String, required: true },
      isRequired: { type: Boolean, required: true },
      defaultValue: { type: Schema.Types.Mixed }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

export default CategorySchema;
