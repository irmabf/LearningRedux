import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = -1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count = 0}) => ({
  type: 'SET',
  count
});

/**
 * 
 * Reducers 
 * A reducer determins what to do based of on
 * an action, how do we wanna change the state
 * 
 * Reducers are pure functions:
 * 
 * -> The output is ONLY determined by the input
***/
const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'SET':
    return {
      count: action.count
    };
    case 'RESET':
    return {
      count: 0
    };
    default:
      return state;
  }
};

// Store

//I pass to createStore()  my reducer,
//in this case, countReducer

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
  console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 6}));

store.dispatch(decrementCount());



store.dispatch(resetCount());

store.dispatch(setCount({ count: -100 }));




