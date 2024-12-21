import Mutation from "../../decorator/mutation.decorator";
import Query from "../../decorator/query.decorator";
import { ExpenseInput, ExpenseUpdate } from "../../type/expense.type";
import { ExpenseService } from "../service/expense.service";

export class ExpenseResolver {
  private expenseService: ExpenseService;

  constructor() {
    this.expenseService = new ExpenseService();
  }

  @Query()
  public async getExpenses() {
    return await this.expenseService.getExpenses();
  }

  @Query()
  public async getExpense(_: any, { id }: { id: string }) {
    return await this.expenseService.getExpense(id);
  }

  @Mutation()
  public async addExpense(_: any, expenseInput: ExpenseInput) {
    return await this.expenseService.addExpense(expenseInput);
  }

  @Mutation()
  public async updateExpense(_: any, expenseUpdate: ExpenseUpdate) {
    return await this.expenseService.updateExpense(expenseUpdate);
  }

  @Mutation()
  public async deleteExpense(_: any, { id }: { id: string }) {
    return await this.expenseService.deleteExpense(id);
  }
}
