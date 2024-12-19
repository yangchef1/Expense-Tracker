import { Expense } from "../model/Expense";

export const expenseResolvers = {
  Query: {
    getExpenses: async () => {
      return await Expense.find();
    },

    getExpense: async (_: any, { id }: { id: string }) => {
      return await Expense.findById(id);
    },
  },

  Mutation: {
    addExpense: async (
      _: any,
      {
        title,
        amount,
        category,
        date,
        description,
      }: {
        title: string;
        amount: number;
        category: string;
        date: string;
        description: string | null;
      }
    ) => {
      const newExpense = new Expense({
        title,
        amount,
        category,
        date,
        description,
      });
      await newExpense.save();
      return newExpense;
    },

    updateExpense: async (
      _: any,
      {
        id,
        title,
        amount,
        category,
        date,
        description,
      }: {
        id: string;
        title?: string;
        amount?: number;
        category?: string;
        date?: string;
        description?: string | null;
      }
    ) => {
      const updatedExpense = await Expense.findByIdAndUpdate(
        id,
        { title, amount, category, date, description },
        { new: true }
      );
      if (!updatedExpense) {
        throw new Error("Expense not found");
      }
      return updatedExpense;
    },

    deleteExpense: async (_: any, { id }: { id: string }) => {
      const deletedExpense = await Expense.findByIdAndDelete(id);
      if (!deletedExpense) {
        throw new Error("Expense not found");
      }
      return true;
    },
  },
};
