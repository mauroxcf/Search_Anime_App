import React from 'react'
import AnimeSearch from './AnimeSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/App.css';


function App() {

  return (
    <div>
      <div className="App m-2">
        Anime Search Database
      </div>
      <div>
        <AnimeSearch />
      </div>
    </div>
  );
}

export default App;
