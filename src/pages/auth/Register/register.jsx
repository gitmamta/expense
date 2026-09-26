import { useFormik } from "formik";
import api from "../../../api/api";
import { useNavigate } from "react-router";

let initialValue = {
  username: "",
  password: "",
  email: "",
  fullName: "",
};



export default function Register() {
  const navigate=useNavigate();
  const formik = useFormik({
  initialValues: initialValue,
  onSubmit: submitHandler,
});

// function submitHandler(values) {
//   console.log(values);
//   formik.handleReset();
// }

async function submitHandler(values){
try{

  const response=await api.post("/register",values)
  console.log(response.data.data);
  alert(response.data.message);
 navigate("/login");
}
catch(error){
  console.log(error);
}

}




  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
         <div className="row w-100 justify-content-center">
          <div class="col-md-6">
        <div className="card">
          <div className="card-body shadow">
           
              
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex flex-column gap-3"
            >
              <div className="text-center">
              <i className="bi bi-person-plus-fill fs-1 text-primary"></i>

              <h3>Registration</h3>
              </div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <label htmlFor="fullName">FullName</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter fullname"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              <button type="submit" className="btn btn-primary">
                Login
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
