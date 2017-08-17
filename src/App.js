import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: '',
      name: '',
      comments: [],
      nasa: {},
    };

    this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleCommentTextChange(event){
    this.setState({
      commentText: event.target.value
    })
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault()
    const newComment = {
      comment: this.state.commentText,
      author: this.state.author
    }
    const comments = this.stats.comments;
    comments.push(newComment)
    
    this.setState({
      comments: comments,
      comment: "",
      author: ""
    })
  }

  componentWillMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    .then(r => r.json() )
    .then((json) => {
      console.log("Data from componentWillMount fetch", json)
      this.setState({nasa: json})
    })
  }

  render() {
    let nasa = this.state.nasa;
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>Welcome to NASA</h1>
            </div>
          </div>
        </div>
        <section className="row">
          <div className="col-md-10 offset-md-1">
          <h1 className="display-3">{nasa.title}</h1>
          <div className="col-md-6">
            <img className="img-fluid" alt="mars" src={nasa.url}/>
          </div>
          <div className="col-md-6">
            <p>{nasa.explanation}</p>
            <div className="card">
              <div className="card-block">
                <h3>Leave A Comment</h3>
                <form>
                  <div className="form-group">
                    <textarea className="form-control" name="comment"  rows="3" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control col-md-3" name="name"  type="text"/>
                  </div>
                  <div className="form-group pull-right">
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="row">
          <div className="col-md-10 offset-md-1">
            <div className="card comments">
              <div className="card-block">
              <h4 className="card-subtitle mb-2 text-muted">Comments</h4>
                <div className="card comments col-md-5">
                  {this.state.comments.map( (comment) => {
                    return <div>
                      <p>{comment.comment}</p>
                      <p>{comment.author}</p>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
