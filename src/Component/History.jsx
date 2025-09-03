import React from 'react'
// import ExpenseItem from './ExpenseItem
import ExpenseIT from './ExpenseIT'

function History(props) {
  // console.log(props.expense)
  return (
    <div className='history'>

        <h1>History</h1>
   {
     props.expense.map((item)=>(
        <ExpenseIT key={item.id} expense={item} deleteExpense={props.deleteExpense}/>

         ))
   }
    </div>
  )
}

export default History

