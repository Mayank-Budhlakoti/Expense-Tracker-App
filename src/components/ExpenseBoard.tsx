import { useState } from "react"
import "./css/ExpenseBoard.css";

const YearInput = ({year, setYear}:any) => {
  const handleYearChange = (e:any) => {
    setYear(e.target.value)
  }
  return <select className="yearInput" name="year" value={year} onChange={handleYearChange}>
    <option>All</option>
    {
      new Array(10).fill(0).map((value,index) => {
        return <option value={`${2015+index}`}>{2015+index}</option>
      })
    }
  </select>
}

export default function ExpenseBoard({expenses=[]}:any) {
  const [year,setYear] = useState('');
  const [filterDate,setFilterDate] = useState('2024')
  return <div className="expenseBoardContainer">
    <div className="filterContainer"><h4>Filter by year</h4><YearInput year={year} setYear={setYear}/></div>
    {expenses.filter(({date}:any) =>  {
      if(!year)
      return true;
      const dated=new Date(date)
      return dated.getFullYear().toString()===year;
    }).map(({title='',amount=0,date=''}) =>{
      const dated=new Date(date)
      return <div className="expenseRow">
      <div className="expenseBoardDate">{dated.toLocaleString('default',{month:'long'})}<br/>{dated.getFullYear()}<br/>{dated.getDay()}</div>
      <div className="expenseBoardTitle">{title}</div>
      <div className="expenseBoardAmount">${amount}</div>
    </div>
    })}
  </div>
}