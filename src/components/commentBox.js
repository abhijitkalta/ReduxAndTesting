import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { saveComment } from "../actions/index";
import { connect } from 'react-redux';

class CommentBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event){
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit(event){
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ''
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="comment-box" style={{margin: 20}}>
        <h3> Add a comment </h3>
        <textarea value={this.state.comment} onChange={this.handleChange}></textarea>
        <div>
          <button action="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    saveComment
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(CommentBox);
