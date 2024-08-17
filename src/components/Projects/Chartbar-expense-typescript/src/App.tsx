import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { expenses } from './expenses';
export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
const DUMMY_EXPENSES: Expense[] = expenses


const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);
  const addExpenseHandler = (expense: Expense): void => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className='expenses-typescript'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
