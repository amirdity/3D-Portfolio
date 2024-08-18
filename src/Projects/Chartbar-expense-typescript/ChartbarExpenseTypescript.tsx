import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { expenses } from './expenses';
import './index.css'
import styled from 'styled-components';
export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
const GlobalStyles = styled.div`
  padding: 50px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
  animation: gradient 3s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
 
`
const DUMMY_EXPENSES: Expense[] = expenses
const ChartbarExpenseTypescript = () => {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);
  const addExpenseHandler = (expense: Expense): void => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (

    <div className='expenses-typescript-moving-gradiant'>

      <GlobalStyles>
        <div className='expenses-typescript text-black '>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      </GlobalStyles>
    </div>

  );
};

export default ChartbarExpenseTypescript;
