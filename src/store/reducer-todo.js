import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, toggleTodo } from '../components/todo/todo';

function ReduxCounter(props) {
  console.log(props);
  const { addItem, deleteItem, toggleTodo } = props;

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
    increment: () => dispatch(increment()),
    add7: () => dispatch(add(7)),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter);
