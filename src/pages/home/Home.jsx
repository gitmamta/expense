
import { Link } from "react-router-dom";
import api from "../../api/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    submitHandler();
  }, []);

  async function submitHandler(values) {
    try {
      const response = await api.get("/expenses", values);
      setExpenses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );
  const currentMonth = new Date().getMonth();

  const totalThisMonth = expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getMonth() === currentMonth;
    })
    .reduce((total, expense) => total + Number(expense.amount), 0);

  return (
    <>
      <div className="container">
        <h1 className="fw-bold mt-3">Welcome to the Expense Tracker</h1>
        <ul className="d-flex gap-4 list-unstyled">
          <li>
            <Link to="/add" className="btn btn-success px-4">Add</Link>
          </li>
          <li>
            <Link to="/view" className="btn btn-outline-secondary px-4">View</Link>
          </li>
        </ul>

        <h5 className="fw-semibold">
          Track and manage your expenses effectively.Use the navigation link to
          add new expenses or view expenses
        </h5>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
            <div className="card-body shadow-sm mt-4">
              <h3 className="fw-semibold">Total Expenses</h3>
              <h5 className="text-muted"> ₹ {totalExpenses}</h5>
            </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
            <div className="card-body shadow-sm mt-4">
              <h3 className="fw-semibold">This month Expenses</h3>
                <h5 className="text-muted"> ₹ {totalThisMonth}</h5>
            </div>
          </div>
          </div>
        </div>

        <div className="card shadow-sm mt-4">
          <div className="card-body">
            <h3 className="fw-semibold text-dark">Summary</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="text-muted">{expenses.length}</h5>
              <p className="fw-semibold">Transactions</p>
            </div>
            <div className="col-md-4">
               <h5 className=" text-danger"> ₹ {totalExpenses.toLocaleString()}</h5>
              <p className="fw-semibold">Total Spent</p>
            </div>
            <div className="col-md-4">
                <h5 className="text-muted">
                 ₹ {expenses.length > 0
                  ? Math.round(totalExpenses / expenses.length).toLocaleString()
                  : 0}
              </h5>
              <p className="fw-semibold">Average</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
