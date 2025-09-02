// import React from 'react'
// import { useState } from 'react'
// import Form from './Form'
// import { v4 as uid } from 'uuid'
// import History from './History'
// import BalanceContainer from './BalanceContainer'
// function ExpenseContainer() {

//   const [expense, setExpense] = useState([])
//   // function addExpense(title, amount) {
//   //   setExpense([...expense, { id: uid(), title, amount }])
//   //   console.log(expense);
//   //   }
  



// async function addExpense(title, amount) {
//   try {
//     const newExpense = await fetch("http://localhost:3333/post", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, amount })
//     });

//     const data = await newExpense.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error adding expense:", error);
//   }
// }




// async function deleteExpense(id) {
//   await fetch(`http://localhost:3333/delete/${id}`,{
//     method: "DELETE"
//   });
//   getExpense();
// }


//   function deleteExpense(id){
//         setExpense(expense.filter((item)=> item.id !== id))
//   }
//   return (
//     <div className='expense-container'>
//       <BalanceContainer expense={expense} />
//       <Form addExpense={addExpense} />
//       <History expense={expense} deleteExpense={deleteExpense} />
//     </div>
//   )
// }

// export default ExpenseContainer


//FRONTEND AND BACKEND INTEGRATION OCCURING HERE SINCE IT IS THE PARENT CONTAINER

import React, { useState, useEffect } from 'react'
import Form from './Form'
import {v4 as uid} from 'uuid'
import History from './History'
import BalanceContainer from './BalanceContainer'


function Expensecontainer() {
  
//   const EXPENSE = [{
//       id:uid(),
//        title:"food",
//        amount:50
//   },{
//     id:uid(),
//     title:"transport",
//     amount:20
//   }]
  
  const[expense,setExpense] = useState([])

  //the try catch block here represents the frontend backend connection  
  
  
  //post backend integration(frontend function)
  async function addExpense(title,amount){
     
    try {
       const newExpense = await fetch("https://expensetrackerbackend-rvl6.onrender.com/post",{
             method:"POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ title,amount })
    }
     
  ) 
   fetchExpense();
    } 
    catch (error) {
        console.log(error)
    }
 
  }
  
  
  
  //get backend integration
  async function fetchExpense() {
       try {
      const response = await fetch("https://expensetrackerbackend-rvl6.onrender.com/get")
      const data = await response.json()
      console.log(data)
      setExpense(data)
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
        fetchExpense();
    }, []);
  

  //---(frontend function) not backend

  
  
  // delete backend integration
  async function deleteExpense(id) {
       await fetch(`https://expensetrackerbackend-rvl6.onrender.com/delete/${id}`,{
        method: "DELETE"
       })
       console.log("hg")
       fetchExpense();                     //to immediately delete the data
  }
  
  return (
    <div className='expense-container'>
        
        <BalanceContainer expense = {expense}/>

        <Form addExpense={addExpense}/>
        
        <History expense={expense} deleteExpense = {deleteExpense}/>
    
    </div>
  )
}

export default Expensecontainer
