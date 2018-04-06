import Redux from 'redux';

const initialBoard = Array(10).fill(Array(10).fill(0));

var boardReducer = (state = initialBoard, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  default:
    return state;
  }
};

export default boardReducer;
