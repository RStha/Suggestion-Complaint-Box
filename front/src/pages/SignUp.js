import React, { Component } from 'react';

import axios from 'axios'

class SignUp extends Component {
  state = {
    fullName: '',
    email: '',
    userName: '',
    password: '',
    department: ''
  }

  signUpHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:4000/users',this.state)
    .then((response) => {
      if (response.data.alreadyExists === true){
        alert('Username already exists')
      } else {
        console.log('saved successfully')
        this.props.history.push('/login');
      } 
  })
  .catch(err =>{
    alert(err.message);
})
  }

  signInHandle = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
     <div className = "App">
     <div className="container col-md-3">

     <form onSubmit={this.signUpHandle} className="form-signin">
       <h2 className="form-signin-heading">Sign Up</h2>
        <hr />
       <div className="form-group">
        <input 
          type="text"
          className="form-control"
          value={this.state.fullName} 
          onChange={(e) => this.setState({fullName: e.target.value})} 
          placeholder="Full Name" 
          required/>
       </div>
       <div className="form-group">
       <input 
          type="email" 
          value = {this.state.email}
          onChange={(e) => this.setState({email: e.target.value})}
          className="form-control" 
          placeholder="Email" required/>
       </div>
       
       <div className="form-group">
       <select className="form-control" onChange = {(e) => this.setState({department: e.target.value})} required>
        <option value="">Choose Department</option>
        <option value="technology">Technology</option>
        <option value="techServies">Tech Service</option>
        <option value="operations">Operations</option>
        <option value="network">Network</option>
        <option value="customerSuccess">Customer Success</option>
        <option value="marketing">Marketing</option>
       </select>
       </div>
       <div className="form-group">
        <input 
            type="text" 
            value = {this.state.userName}
            onChange = {(e) => this.setState({userName: e.target.value})} 
            className="form-control" 
            placeholder="Username" required/>
        </div>
       <div className="form-group">
       <input 
          type="password" 
          value = {this.state.password}
          onChange = {(e) => this.setState({password: e.target.value})}
          className="form-control" 
          placeholder="Password" required/>
       </div>
       <button className="btn btn-lg btn-primary btn-block" type="submit">Signup</button>
     </form>
      </div>
      <div className="container col-md-3">
        <h4>Already have an account?</h4><br/>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.signInHandle}>Sign in</button>
      </div>
      </div>
    );
  }
}

export default SignUp