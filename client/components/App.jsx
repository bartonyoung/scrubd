import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer.jsx';
import CommentBox from './CommentBox.jsx';
import AxiosHelper from '../../server/axios-helper';


class App extends React.Component {

  componentDidMount() {
    AxiosHelper.getComments(this.state.video, comments => {
      this.setState({
        comments: comments
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Scrubd</h1>
        <div className='row'>
          <div className='col-lg-6 col-lg-offset-2' id='VideoPlayer'>
          {console.log(this.props)}
          <h1>{this.props.video}</h1>
            <VideoPlayer currentVideo={this.props.video}/>
          </div>
          <div className='col-lg-6 col-lg-offset-2' id='VideoPlayer'>
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
