// import React from 'react'
// // import ExpenseItem from './ExpenseItem
// import ExpenseItem from './Expenseitem'

// // import ExpenseItem from './ExpenseItem'


// function History(props) {
//   // console.log(props.expense)
//   return (
//     <div className='history'>

//         <h1>History</h1>
//    {
//      props.expense.map((item)=>(
//         <ExpenseItem key={item.id} expense={item} deleteExpense={props.deleteExpense}/>

//          ))
//    }
//     </div>
//   )
// }

// export default History


import React from 'react'
// import ExpenseItem from './ExpenseItem'
import ExpenseItem from './ExpenseItem.jsx'


function History(props) {
  // console.log(props.expense)
  return (
    <div className='history'>

        <h1>History</h1>
   {
     props.expense.map((item)=>(
        <ExpenseItem key={item.id} expense={item} deleteExpense={props.deleteExpense}/>

         ))
   }
    </div>
  )
}

export default History