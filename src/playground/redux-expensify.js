import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions

//ADD_EXPENSE action generator

//We destructure the fields that come from the user
const addExpense = (
  {
    description = '',
    note= '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

/********************************************************************/

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];
    case 'REMOVE_EXPENSE':
      return state.filter( ({ id }) => { return id !== action.id });
    default:
      return state;
  }
};

const filtersReducerDefaultState = [{
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}];

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

//Store createion
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe( () => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense( {
  description: 'Rent',
  amount: 100
}));

const expenseTwo = store.dispatch(addExpense( {
  description: 'Coffee',
  amount: 300
}));

store.dispatch(removeExpense( {
  id: expenseOne.expense.id
}))

//We get the action object back
console.log(expenseOne);


//State
const demoState = {
  expenses: [{
    id: 'fjklsjflksjflskj',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent', //text field
    sortBy: 'amount', //Date or amount
    startDate: undefined, //Date range
    endDate: undefined //Date range
  }
};

