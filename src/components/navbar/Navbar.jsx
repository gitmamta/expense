import "./navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
           <i className="bi bi-receipt-cutoff fs-5 me-2"></i>


            <NavLink to="/home" className="navbar-brand fw-bold">Expense Tracker</NavLink>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#nav-Navbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav-Navbar">
              <ul className="navbar-nav ms-auto d-flex flex-row gap-5">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
