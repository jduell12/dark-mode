import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import {useForm} from './components/hooks/useForm'

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  const initialValues = {value: '', path: '/'};
  const formHooks = useForm(initialValues);
  const [values, handleChanges] = formHooks

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  if(values.path !== '/'){
    return (
      <div className="App">
        <Navbar values={values} handleChanges={handleChanges}/>
        <Charts coinData={coinData.filter(item => item.id === values.value)} />
      </div>
    );
  } else {
    return(
      <div className="App">
          <Navbar values={values} handleChanges={handleChanges} />
      </div>
    )
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
