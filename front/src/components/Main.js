import React, { Component } from 'react';
import SideMenuBar from './SideMenuBar'
import BsFeeds from './BsFeeds'

import axios from 'axios'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            department: '',
            complaintText: '',
            departmentSelected: '',
            defaultPosts: [],
            filteredPost: [],
            comments: []
        }
      }

      componentWillMount() {
        fetch('http://localhost:4000/complaints')
        .then(response => {
          return response.json();
        })
        .then(posts => {
          this.setState({defaultPosts: posts, filteredPost: posts})
          console.log("posts here", this.state.defaultPosts)
        })
        .catch(e => console.log("error", e))
      }
  
    postComplaint = (e) => {
      e.preventDefault();
      
      const postData = {
          department: this.state.department,
          complaint: this.state.complaintText,
          userName: localStorage.getItem("userInfo"),
          createdDate: new Date(),
          isAnoynmous: false
      }

      console.log(postData);

      axios.post('http://localhost:4000/complaints',postData)
      .then((response) => {
        alert("Suggestion/complaint successfully uploaded");
        console.log('saved successfully')
        // a = [1,2,3]
        // b = [...a,4]  => [1,2,3,4]
        var posts = [...this.state.defaultPosts,response.data];
        if(this.state.temp){
        this.setState({
          defaultPosts:posts
        },()=>{
            this.filterByDepartment(this.state.temp)
        });
        } else {
          this.setState({
            defaultPosts:posts,
            filteredPost:posts
          });
        }
        this.setState({complaintText: '', department: ''});
        
        // axios.get('http://localhost:4000/complaints')
        // .then((posts) => {
        //   this.setState({defaultPosts: posts, filteredPost: posts})
        // })
        // .catch(e => console.log("error", e))
    })
    .catch(err =>{
      console.log(err.message);
  })
}

filterByDepartment = (dept) => {
    this.setState({temp:dept});
    console.log('DEFAULT POST', this.state.defaultPosts);
    console.log("Department Selected", dept)
    if (dept === "dashboard" ){
      const filteredPost = this.state.defaultPosts
      this.setState({filteredPost : filteredPost})
      return true
    } else {
      const filteredPost = this.state.defaultPosts.filter((post) => {
        if(post.department === dept) {
          return true
        }
      })
      this.setState({filteredPost : filteredPost})
      console.log('Filtered Post: ', filteredPost);
    } 
  }

    render() {
      return (
        <div style= {{paddingTop: '5rem'}}>
    
            <div className="row">
                <div className="col-sm-2"><SideMenuBar departmentSelected = {this.filterByDepartment} dept={this.state.temp || "dashboard"}/></div>
                <div className="col-sm-10">

            <form onSubmit={this.postComplaint}>
              <div  className="form-group">
                <label>Select related department</label>
                <select className="form-control" id="exampleFormControlSelect1" value={this.state.department} onChange = {(e) => this.setState({department: e.target.value})} required>
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
                <label>Write your Suggestions/ Complaint here.</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.complaintText}
              onChange={(e) => this.setState({complaintText: e.target.value})}  required></textarea>
              </div>
              {/* <div className="checkbox mb-3">
                <label>
                <input type="checkbox" 
                value="remember-me"/> Anoynmous
                </label>
                </div> */}
              <button type="submit" className="btn btn-primary">Post</button>
            </form>
            <br/>
            <hr/>
            <br/>
            <h3>Complaints </h3>
            <br/>
            <div className="container">
                {this.state.filteredPost.map((post, index) => {
                    return <BsFeeds comment = {post.complaint} username = {post.userName} key={index}/>
                })}
                </div>
                </div>
            </div>
            </div>)
    }
  }

export default Main;