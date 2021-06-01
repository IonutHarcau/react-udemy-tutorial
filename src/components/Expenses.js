import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div className="expenses">
            <ExpenseItem title={expenses[0].title} amount={expenses[0].title} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].title} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].title} date={expenses[2].date} />
        </div>

    );
}

export default Expenses;