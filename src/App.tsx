import React from 'react';
import moi from './images/moi.png';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav__logo--container">
          <div className="nav__logo__box">
            <img src={moi} alt="user" />
          </div>
          <p className="nav__logo--text">Bekenbauers</p>
        </div>
        <ul className="nav__list">
          <li className="nav__list--item">Home</li>
          <li className="nav__list--item">About</li>
          <li className="nav__list--item">Produts</li>
          <li className="nav__list--item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
