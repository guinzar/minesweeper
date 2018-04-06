import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {

  render() {
    // console.log(this.props.board);
    var board = [];
    for (var i = 0; i < this.props.board.length; i++) {
      for (var n = 0, spaces = []; n < this.props.board.length; n++) {
        spaces.push(<div className="space">X</div>);
      }
      board.push(<div className="boardRow">{spaces}</div>);
    }
    return (
      <div className="Board">
        {board}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board
});

const mapDispatchToProps = (dispatch) => ({
  // handleBoardClick: (row, col) => dispatch(changeVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
