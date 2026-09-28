import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import api from "../../../api/api";
let initialValue = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: submitHandler,
  });

  // function submitHandler(values) {
  //   console.log(values);
  //   formik.handleReset();
  // }

  async function submitHandler(values) {
    try{
    const response = await api.post("/login", values);
    console.log(response.data);
    alert(response.data.message);
    navigate("/home");
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body shadow">
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-2"
                >
                  <div className="text-center">
                  <i className="bi bi-person-circle fs-1 text-primary"></i>
                  <h3 className="fw-semibold text-dark">Login</h3>
                  </div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="enter your email"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>

                  <p className="text-center">
                    New User?<Link to="/register">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
