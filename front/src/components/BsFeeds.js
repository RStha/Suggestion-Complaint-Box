import React from 'react';

const BsFeeds = (props) => {

  const onDeleteClicked = (id) => {
    console.log(id)
    props.deletePost(id)
  }
const username = localStorage.getItem("userInfo")
var isUser = false
if (username === props.username) {
  isUser = true
}

return (
  <div className="media text-muted pt-3">
  <img src="" alt="" className="mr-2 rounded"/>
  <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
    <div className="d-flex justify-content-between align-items-center w-100">
      <strong className=" d-block text-gray-dark">{props.username}</strong>
      {isUser ? <a className="pointer" value={props.id} onClick={(e) => onDeleteClicked(props.id)}>Delete</a> : ""}
      
    </div>
    <span className="d-block">{props.comment}</span>
  </div>
</div>
//   <p>
//   <strong className="d-block text-gray-dark">{props.username}</strong>{props.comment}
//   <span class="input-group-btn">
//             <button class="btn btn-danger" type="reset"><span class="glyphicon glyphicon-remove"></span></button>
//           </span>
//   <br/>
// </p>

)
}


export default BsFeeds;