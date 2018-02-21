import React, { Component } from 'react';
import BsNav from '../components/BsNav';
import Main from '../components/Main';

class Dashboard extends Component {
  
  componentDidMount() {
    if(!localStorage.getItem('userInfo')){
      this.props.history.push('/login')
        // window.location.href="/login"
    }
}

signOut = () => {
  localStorage.setItem('userInfo', "")
    this.props.history.push('/login')
}

  render() {
    return (
      <div>
        <BsNav title = "Complaint Box" signOut = {this.signOut}/>
        <Main/>
      </div>
    );
  }
}

export default Dashboard;
