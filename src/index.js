import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './store/configureStore';
import { addNote } from './actions/notes';
import { searchByAuthor } from './actions/filters';
import filteredNotes from './selectors/filteredNotes';
import { Provider } from 'react-redux';

const store = configureStore();
store.dispatch(addNote({ author: 'Jerry Groopman', title: 'How Doctors Think', text: 'blah' }));
store.dispatch(addNote({ author: 'Jerry Tom', title: 'A Cartoon', text: 'hmm' }));
store.dispatch(addNote({ author: 'Michelle Obama', title: 'Becoming', text: 'Interesting stuff' }));
// store.dispatch(searchByAuthor('Jerry Tom'));
const state = store.getState();
const visibleNotes = filteredNotes(state.notes, state.filters);
console.log("VN", visibleNotes);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
