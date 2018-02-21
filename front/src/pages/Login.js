import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  signInHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:4000/users/login',this.state)
      .then((res) => {
          localStorage.setItem('userInfo',this.state.username)
          this.props.history.push('/')
      })
      .catch(err =>{
          console.log(err.message);
      })
  }

  render() {
    return (
      <div>
      <div className="container col-md-3">

      <form onSubmit={this.signInHandle} className="form-signin">
        
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Suggestion/Complaint Box</h1>
        <p>Give Suggestion and file complaints.</p>
        <p>Don't have an account <a href="/signup">Sign up Here.</a></p>
        </div>
        <h4 className="form-signin-heading">Please sign in</h4>
        <div className="form-group">
          <label htmlFor="inputUserName" className="sr-only">Email address</label>
          <input 
            type="text" 
            value = {this.state.username}
            onChange = {(e) => this.setState({username: e.target.value})}
            className="form-control" 
            placeholder="Username" 
            required/>
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" 
            value = {this.state.password}
            onChange = {(e) => this.setState({password: e.target.value})}
            className="form-control" 
            placeholder="Password" 
            required/>
        </div>

        <div className="checkbox mb-3">
        <label>
          <input type="checkbox" 
          value="remember-me"/> Remember me
        </label>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
      </div>
    );
  }

  
}

export default Login;
