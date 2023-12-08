import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";

function Birds() {
  const handleSearch = () => {
    alert("Search button clicked!");
  };

  return (
    <div className="container-fluid top-fixed">
      <div className="row mt-4 shadow p-3">
        <div className="col-lg-3 col-md-2 col-sm-2 col-2 ">
          <Navbar />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-8 d-flex align-items-center">
          <div className="input-group">
            <input
              className="form-control text-muted"
              type="text"
              placeholder="Search"
            />
            <span
              className="input-group-text search-icon text-warning fs-5"
              onClick={handleSearch}
            >
              <BsSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birds;
