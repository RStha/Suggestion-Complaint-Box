import React from 'react';

const BsFeeds = (props) => {

return (
  <p>
  <strong className="d-block text-gray-dark">{props.username}</strong>{props.comment}
  <br/>
</p>

)
}


export default BsFeeds;