import { ExpenseInput, ExpenseUpdate } from "../../type/expense.type";
import { Expense } from "../model/Expense";

export class ExpenseService {
  async getExpenses() {
    return await Expense.find();
  }

  async getExpense(id: string) {
    const expense = await Expense.findById(id);
    if (!expense) {
      throw new Error("Expense not found");
    }
    return expense;
  }

  async addExpense(expenseInput: ExpenseInput) {
    const { title, amount, category, date, description } = expenseInput;
    const newExpense = new Expense({
      title,
      amount,
      category,
      date,
      description,
    });
    await newExpense.save();
    return newExpense;
  }

  async updateExpense(expenseUpdate: ExpenseUpdate) {
    const { id, title, amount, category, date, description } = expenseUpdate;
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { title, amount, category, date, description },
      { new: true }
    );
    if (!updatedExpense) {
      throw new Error("Expense not found");
    }
    return updatedExpense;
  }

  async deleteExpense(id: string) {
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      throw new Error("Expense not found");
    }
    return true;
  }
}
