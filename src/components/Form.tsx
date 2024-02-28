import React, { useState } from "react";
import "./css/Form.css";

export default function Form({addExpense}:{addExpense:CallableFunction}) {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');
  const [date,setDate] = useState('');
  const handleTitleChange = (e:any) => {
    setTitle(e.target.value)
  }
  const handleAmountChange = (e:any) => {
    setAmount(e.target.value)
  }
  const handleDateChange = (e:any) => {
    setDate(e.target.value)
  }
  const handleSubmit = () => {
    addExpense({title,amount,date})
    setTitle('');
    setAmount('');
    setDate('');
  }
  return <div className="form_container">
    <div>
      <h4>Title</h4>
    <input className="form_inputs" placeholder="Enter Title" name="title" value={title} type="text" onChange={handleTitleChange}/>
    </div>
    <div>
      <h4>Amount</h4>
    <input className="form_inputs" placeholder="Enter Amount" name="amount" value={amount} type="number" onChange={handleAmountChange}/>
    </div>
    <div>
      <h4>Date</h4>
    <input className="form_inputs" name="date" value={date} type="date" onChange={handleDateChange}/>
    </div>
    <br/>
    <div className="buttonContainer">
      <button className="form_button" onClick={handleSubmit}>Add Expense</button>
    </div>
  </div>
};