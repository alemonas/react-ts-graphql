import ApolloClient, { gql } from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { store } from './app/store';
import { Provider as ReduxProvider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api'
});

client.query({ query: gql`
  {
    user(id: 1) {
      id
      name
    }
  }
`}).then(console.log);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
