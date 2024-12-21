export interface ExpenseBase {
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string | null;
}

export type ExpenseInput = ExpenseBase;

export interface ExpenseUpdate extends Partial<ExpenseBase> {
  id: string;
}
