import React from 'react'
import CurrentItem from './CurrentItem';

function BalanceContainer(props) {
    let income = 0;
    let expenses = 0;
  console.log(props.expense)
   props.expense.forEach((item) => {
    let amt = Number(item.amount); // safer than parseInt
    if (!isNaN(amt)) {
        if (amt > 0) {
            income += amt;
        } else {
            expenses += amt;
        }
    }
});

    
  
    console.log(income,expenses)
    return (
        <div className='balance-container'>
            <CurrentItem title="income" amount={income} type="income"/>
            <CurrentItem title="expense" amount={expenses} type="expense"/>
            <CurrentItem title="Balance" amount={income+expenses} type="balance"/>
        </div>
    )
}

export default BalanceContainer