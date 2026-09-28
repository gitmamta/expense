import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import api from "../../api/api";

let initialValue = {
  expenseName: "",
  amount: "",
  date: "",
  description: "",
};

export default function Add() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: submitHandler,
  });

  // function submitHandler(values) {
  //   console.log(values);
  //   formik.handleReset();
  // }

  // async function submitHandler(values) {
  //   try {
  //     const response = await fetch("http://localhost:5000/expenses", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     const data = await response.json();
  //     formik.resetForm();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function submitHandler(values) {
    try {
      const response = await api.post("/expenses", values);

      console.log(response);
      formik.resetForm();
      setStatus(false);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body shadow">
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column column-gap-3"
                >
                  <h1>Add New Expense</h1>
                  <label htmlFor="expenseName">Expense name</label>
                  <input
                    type="text"
                    id="expenseName"
                    name="expenseName"
                    placeholder="Enter expense"
                    onChange={formik.handleChange}
                    value={formik.values.expenseName}
                  />

                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                  />
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Enter date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                  />

                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  ></textarea>
                  <button type="submit" className="btn btn-success mt-3">
                    Add Expense
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
