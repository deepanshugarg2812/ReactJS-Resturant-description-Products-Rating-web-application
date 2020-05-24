import React from 'react';
import Main from './Components/mainComponents'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigureStore} from './Redux/ConfigureStore'
import './App.css';

const store = ConfigureStore();

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    </React.Fragment>
    );
  }
  
  export default App;
