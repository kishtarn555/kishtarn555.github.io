import React from "react";

const MainNavbar: React.FC = () => {

  return (
    <>
      <hr/>
      <div className="d-flex justify-content-center align-items-center ps-3 pe-3">
        <span className="me-2 ms-2">&copy; 2025 Hector Ricardez. All rights reserved.</span>
      </div>
      <div className="d-flex justify-content-center align-items-center ps-3 pe-3 mb-3 ">        
        <a href="https://www.instagram.com/hec_kishtarn/" className="me-2 ms-2"><i className="bi bi-instagram"></i> hec_kishtarn </a>
        <a href="https://github.com/kishtarn555" className="me-2 ms-2"><i className="bi bi-github"></i> kishtarn555 </a>
      </div>
    </>
  );
};

export default MainNavbar;