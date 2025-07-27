import { Schema, model, Types } from 'mongoose';

const IntegrationSchema = new Schema({
  organizationId: { type: Types.ObjectId, ref: 'Organization', required: true },
  name: { type: String, required: true },
  integrationType: { type: String, required: true }, // ERP, E-commerce, Accounting, etc.
  provider: { type: String, required: true }, // SAP, Shopify, QuickBooks, etc.
  credentials: {
    apiKey: { type: String, required: true }, // Encrypted
    apiSecret: { type: String, required: true }, // Encrypted
    endpoint: { type: String, required: true }
  },
  mappings: {
    products: {
      enabled: { type: Boolean, default: false },
      lastSync: { type: Date },
      syncDirection: { type: String }
    },
    inventory: {
      enabled: { type: Boolean, default: false },
      lastSync: { type: Date },
      syncDirection: { type: String }
    },
    orders: {
      enabled: { type: Boolean, default: false },
      lastSync: { type: Date },
      syncDirection: { type: String }
    }
  },
  status: { type: String, default: 'Inactive' }, // Active, Inactive, Error
  lastSyncStatus: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default model('Integration', IntegrationSchema);
