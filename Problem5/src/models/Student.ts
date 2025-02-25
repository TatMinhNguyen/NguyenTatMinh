import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  age: number;
  gpa: number;
  createdAt: Date;
}

const StudentSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gpa: { 
      type: Number, 
      required: true, 
      set: (v: number) => parseFloat(v.toFixed(2))
    },
    createdAt: { type: Date, default: Date.now }
});

export const Student = mongoose.model<IStudent>("Student", StudentSchema);
