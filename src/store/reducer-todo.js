import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, saveItem, toggleComplete, toggleDetails } from '../components/todo/todo';

function ReduxCounter(props) {
  console.log(props);
  const { addItem, deleteItem, saveItem, toggleComplete, toggleDetails } = props;

  return (
    <div>
      <h2>Redux Count: {count}</h2>
      <button onClick={add7}>
        +7
      </button>
      <button onClick={increment}>
        Increment Counter
      </button>
      <button onClick={decrement}>
        Decrement Counter
      </button>
      <button onClick={reset}>
        Reset Counter
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    polarity: state.counter.count > 0 ? 'positive' : 'zero'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: () => dispatch(addItem()),
    deleteItem: () => dispatch(deleteItem(7)),
    saveItem: () => dispatch(saveItem()),
    toggleComplete: () => dispatch(toggleComplete()),
    toggleDetails: () => dispatch(toggleDetails()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter);
