import React from 'react';

const SideMenuBar = (props) => {
  
  const onDepartmentSelected = (dept) => {
    console.log("Selected Dept", dept)
    props.departmentSelected(dept)
  }

  return(
    <div className="sidebar">
    <ul className="nav nav-link nav-pills flex-column">
    <li className="nav-item">
      <a className={props.dept === 'dashboard'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("dashboard")}>
        <span data-feather="home"></span>
        Dashboard <span className="sr-only">(current)</span>
      </a>
    </li>
    <li className="nav-item">
      <a className={props.dept === 'technology'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("technology")}>
        <span data-feather="file"></span>
        Technology
      </a>
    </li>
    <li className="nav-item">
      <a className={props.dept === 'techServices'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("techServices")}>
        <span data-feather="shopping-cart"></span>
        Tech Services
      </a>
    </li>
    <li className="nav-item">
      <a className={props.dept === 'customerSuccess'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("customerSuccess")}>
        <span data-feather="users"></span>
        Customer Success
      </a>
    </li>
    <li className="nav-item">
      <a className={props.dept === 'operations'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("operations")}>
        <span data-feather="bar-chart-2"></span>
        Operations
      </a>
    </li>
    <li className="nav-item">
      <a className={props.dept === 'network'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("network")}>
        <span data-feather="layers"></span>
        Network
      </a>
    </li>
    <li className="nav-item">
      <a className={props.dept === 'marketing'?"nav-link active pointer":"nav-link pointer"} onClick={() => onDepartmentSelected("marketing")}>
        <span data-feather="layers"></span>
        Marketing
      </a>
    </li>
  </ul>
  </div>
)}

export default SideMenuBar;