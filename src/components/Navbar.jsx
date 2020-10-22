import React from 'react';
import {useDarkMode} from './hooks/useDarkMode'

const Navbar = (props) => {
  const {values, handleChanges} = props;
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <label htmlFor='pickCurr'>
        <select name='value' id="pickCurr" value={values.value} onChange={handleChanges}>
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
