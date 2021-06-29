import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import { Home, Nosotros, Contacto, Servicios} from './views';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/servicios" component={Servicios} />
    </Switch>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
