import mongoose, { Schema, Document } from "mongoose";

export interface Expense extends Document {
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string | null;
}

const expenseSchema = new Schema<Expense>(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const ExpenseModel = mongoose.model<Expense>("Expense", expenseSchema);

export const Expense = ExpenseModel;
