import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchComments } from '../actions/commentsActions';
import { checkAuth } from '../actions/userActions';
import VideoPlayer from './VideoPlayer.jsx';
import CommentBox from './CommentBox.jsx';
import TopNavBar from './TopNavBar.jsx';

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchComments(this.props.video));
    this.props.dispatch(checkAuth());
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Scrubd</h1>
        <TopNavBar />
        <div className="row">
          <div className="col-lg-6 col-lg-offset-2" id="VideoPlayer">
            <VideoPlayer currentVideo={this.props.video} comments={this.props.comments} />
          </div>
          <div className="col-lg-6 col-lg-offset-2" id="VideoPlayer">
            <CommentBox comments={this.props.comments} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  video: state.video.currentVideo,
  comments: state.comments.comments,
}))(App);
