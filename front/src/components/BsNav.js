import React from 'react';

const BsNav = (props) => {

  const signOut = () => {
    console.log("Signout")
    props.signOut()
  }

  return (
<nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 fixed-top">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">{props.title}</a>
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" onClick={() => signOut()}>Sign out</a>
      </li>
    </ul>
  </nav>
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//     <a className="navbar-brand" href="#">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarsExampleDefault">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//         </li>
//         <li className="nav-item">  
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#">Disabled</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//           <div className="dropdown-menu" aria-labelledby="dropdown01">
//             <a className="dropdown-item" href="#">Action</a>
//             <a className="dropdown-item" href="#">Another action</a>
//             <a className="dropdown-item" href="#">Something else here</a>
//           </div>
//         </li>
//       </ul>
//     </div>
//   </nav>
)
}

export default BsNav;