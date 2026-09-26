import { useEffect, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router";

export default function ViewExpense() {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("http://localhost:5000/expenses")
  //   .then((res)=>res.json())
  //   .then((response)=>{
  //     setExpenses(response.data);
  //     console.log("API response:", data);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    try {
      const response = await api.get("/expenses");
      console.log(response.data);
      setExpenses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    const confirmDelete=window.confirm("Are you sure you want to delete this expense?");
    if(!confirmDelete){
      return
    }
    try {
      const response = await api.delete(`/expenses/${id}`);
      console.log(response.data);
      setExpenses(
        expenses.filter((expense) => 
          expense._id !== id),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="fw-semibold mb-1">View Expenses</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>sr no</th>
              <th>expenseName</th>
              <th>amount</th>
              <th>date</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense._id}>
                <td>{index + 1}</td>
                <td>{expense.expenseName}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>
                  <button
                    onClick={() => navigate(`/update/${expense._id}`)}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(expense._id )}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
