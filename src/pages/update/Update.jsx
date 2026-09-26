import { useFormik} from "formik";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleFetch();
  },[]);

  async function handleFetch() {
    try {
      const response = await api.get(`/expenses/${id}`);
      console.log("API Data:", response.data);
      const expense = response.data.data;//using expense to minimize


      formik.setValues({
        expenseName: expense.expenseName,
        amount: expense.amount,
        date: expense.date? expense.date.split("T")[0] : "",

        description: response.data.description,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let initialValue = {
    expenseName: "",
    amount: "",
    date: "",
    description: "",
  };

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: submitHandler,
  });

  // function submitHandler(values) {
  //   console.log(values);
  //   formik.handleReset();
  // }
  async function submitHandler(values) {
    try {
      const response = await api.put(`/expenses/${id}`, values);
      // const expense=response.data;
      // formik.setValues({
      //   expenseName: expense.expenseName,
      //   amount: expense.amount,
      //   date: expense.date,
      //   description: expense.description,
      // });
      alert(response.data.message);
      navigate("/view");


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
                  <h1>Update Expense</h1>
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
                    Update Expense
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
