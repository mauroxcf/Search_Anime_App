import React from 'react'
import AnimeSearch from './AnimeSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/App.css';


function App() {

  return (
    <div className="App">
      <h1 className="m-2">
        Anime Search Database
      </h1>
      <div className="container">
        <p>Hi there!, welcome to the <mark>anime database search</mark>, in this web app you can search any anime <b>just typing the name in the search box and click the button or press enter</b>, it will display a list of animes with the title, image, rating and some coments in a card. If you want to know more about the anime, just click in the image of the anime, and it will send you to the a web page with all the information about that anime.</p>
        <p><b>Remainder: for security reasons, the search list will not show adult content.</b></p>
      </div>
      <div>
        <AnimeSearch />
      </div>
    </div>
  );
}

export default App;
