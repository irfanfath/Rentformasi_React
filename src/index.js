import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from "./Component/Reducer/cartReducer";
import "./Assets/styling.css";
import "./Assets/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Assets/mdb.min.css"

const store = createStore(cartReducer);
 
ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));
{/* <Main/>, 
  document.getElementById("root")
); */}