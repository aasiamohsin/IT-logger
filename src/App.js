import React, { Fragment, useEffect } from 'react';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';
import AddButton from './Components/Layout/AddButton';
import AddLogModal from './Components/Logs/AddLogModal';
import EditLog from './Components/Logs/EditLog';
import AddDeveloperModal from './Components/Developers/AddDeveloperModal';
import DevelopersListModal from './Components/Developers/DevelopersListModal';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
        <AddLogModal />
        <EditLog />
        <AddDeveloperModal />
        <DevelopersListModal />
        <AddButton />
      </div>
    </Fragment>
  );
}

export default App;
