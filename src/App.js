import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import Positions from "./Pages/Positions";
import Degrees from "./Pages/Degrees";

function App() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12 mb-4">
          <Link className="btn btn-secondary me-3" to={"/users"}>
            Users
          </Link>
          <Link className="btn btn-secondary me-3" to={"/positions"}>
            Positions
          </Link>
          <Link className="btn btn-secondary me-3" to={"/degrees"}>
            Degrees
          </Link>
        </div>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/degrees" element={<Degrees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
