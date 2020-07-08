import React from 'react';
import {Link} from 'react-router-dom'
import {useDarkMode} from './hooks/useDarkMode'
import {useForm} from './hooks/useForm'
import Charts from './Charts'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const initialValue = '';
  const formHooks = useForm(initialValue);
  const [value, handleChange] = formHooks

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <label htmlFor='pickCurr'>
        <select id="pickCurr" value={value} onChange={handleChange}>
          <option value=''>--Select a Crypto Currancy--</option>
          <option value='bitcoin'>Bitcoin</option>
          <option value='ethereum'>Ethereum</option>
          <option value='tether'>Tether</option>
          <option value='ripple'>Ripple</option>
          <option value='bitcoin-cash'>Bitcoin Cash</option>
          <option value='cardano'>Cardano</option>
          <option value='bitcoin-cash-sv'>Bitcoin SV</option>
          <option value='litecoin'>Litecoin</option>
          <option value='crypto-com-chain'>Crypto.com Coin</option>
          <option value='binancecoin'>Binancecoin</option>
        </select>
      </label>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
