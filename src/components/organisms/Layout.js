import React, { PropTypes } from 'react';
import { Header } from "./Header/Header";
import '../../App.css';

const Layout = props => {
  return (
    <div>
      <Header></Header>
      {/* CONTENT : qui changera selon la page donc un (TODO) router sera nécessaire */}
      <div className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className='text-3xl font-bold'>Hello</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

Layout.propTypes = {
  
};

export default Layout;