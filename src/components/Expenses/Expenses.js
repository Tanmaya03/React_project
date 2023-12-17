import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("all");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	let filteredExpenses;
	if (filteredYear === "all") {
		filteredExpenses = props.items;
	} else {
		filteredExpenses = props.items.filter(
			(expense) => expense.date.getFullYear().toString() === filteredYear
		);
	}

	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
			{/* {filteredExpenses.length === 0 ? (
				<p>No expenses found on {filteredYear}</p>
			) : (
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)} */}
			{/* <ExpenseItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
			<ExpenseItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<ExpenseItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/>
			<ExpenseItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			/> */}
		</Card>
	);
}

export default Expenses;