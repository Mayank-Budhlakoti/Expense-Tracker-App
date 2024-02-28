import { useState } from "react";
import ExpenseBoard from "./components/ExpenseBoard";
import Form from "./components/Form";

function App() {
  const [expenses,setExpenses] = useState([])
  const addExpense = (expense:any) => {
    const temporary:any=[...expenses,expense];

    setExpenses(temporary)
  }
  console.log(expenses);
  return <div className="appContainer">
    <Form addExpense={addExpense}/>
    <ExpenseBoard expenses={expenses}/>
  </div>
}
export default App;