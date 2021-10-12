import React from 'react';
const Like = (props) => {
  return (
    <i
      onClick={props.onClick}
      className={!props.liked ? "far fa-heart" : 'fas fa-heart'}
      style={{ cursor: 'pointer', color: '#30dcf2' }}
    // onClick={(e) => this.handleLike(e)}
    ></i>
  );
}

export default Like;