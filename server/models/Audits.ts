import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IAudit extends Document {
  organizationId: Types.ObjectId;
  entityType: string;
  entityId: Types.ObjectId;
  action: string;
  changes: {
    field: string;
    oldValue: any;
    newValue: any;
  };
  performedBy: Types.ObjectId;
  performedAt: Date;
  ipAddress: string;
}

const AuditSchema: Schema = new Schema({
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  entityType: { type: String, required: true },
  entityId: { type: Schema.Types.ObjectId, required: true },
  action: { type: String, required: true },
  changes: {
    field: { type: String, required: true },
    oldValue: { type: Schema.Types.Mixed },
    newValue: { type: Schema.Types.Mixed }
  },
  performedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  performedAt: { type: Date, default: Date.now },
  ipAddress: { type: String }
});

export default mongoose.model<IAudit>('Audit', AuditSchema);
