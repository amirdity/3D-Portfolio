import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
interface EXXX {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
type OnAddExpense = {
  onAddExpense: (arg0: EXXX) => void
}
const NewExpense = (props: OnAddExpense) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = (): void => {
    setIsEditing(true);
  };
  const stopEditingHandler = (): void => {
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={(enteredExpenseData) => saveExpenseDataHandler({ ...enteredExpenseData, amount: Number(enteredExpenseData.amount) })}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
