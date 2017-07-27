import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const CommentList = (props) => {

  const listItem = props.comments.map((list) => {
      return <li key={list} className="list-group-item">{list}</li>;
    });

  return (
    <div className="comment-list">
      <ul className="list-group">
        {listItem}
      </ul>
    </div>
  );
};

function mapStateToProps(state){
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
