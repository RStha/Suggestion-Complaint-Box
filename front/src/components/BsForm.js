import React from 'react';

const BsForm = (props) => (
  <div className="container col-md-3">
  
        <form onSubmit={this.signInHandle} className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <div className="form-group">
            <label for="inputUserName" className="sr-only">Email address</label>
            <input 
              type="text" 
              value = {props.username}
              onChange = {(e) => props.setState({userName: e.target.value})}
              className="form-control" 
              placeholder="Username" 
              required/>
          </div>
  
          <div className="form-group">
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" 
              value = {props.password}
              onChange = {(e) => props.setState({password: e.target.value})}
              className="form-control" 
              placeholder="Password" 
              required/>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
   
      </div>
)

export default BsForm;