import React, {useState} from 'react'
import AnimeRender from './AnimeRender';
import CarouselRender from './CarouselRender';
import axios from 'axios';

import "./styles/App.css"
import "./styles/images_styles.css"

export default function AnimeSearch() {

  // setting state
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState("")

  //obtain the data from the API
  const fetchData = async () => {
    //here we change the state of error and loading
    setError(false)
    setLoading(true)

    try {
      const result = await axios("https://api.jikan.moe/v3/search/anime", {
        params: {
          q: search,
          genre: 12,
          genre_exclude: 0,
        }
      },);

      // set the state to false because whe already get the data
      setLoading(false)
      return result.data.results

    } catch (error) {
      setLoading(false)
      setError(true)
      if (search.length === 0) alert("escriba algo en el buscador")
      else alert(error.message)
      // manejar el else con el componente de error pasandole props el error
    }
  }

  /* if (error) return "<PagError />" */
  if (loading) return "<Loader />"

  const HandleSearch = (e) => {
    e.preventDefault()
    fetchData().then( (res) => {
      console.log('la respuesta es:')
      console.log(res)
      setAnime(res)
    })
  }
  return (
    <main>
      <div className="container mb-2">
        <form className="form-inline" type="text" onSubmit={HandleSearch}>
          <input
          className="form-control"
          type="search"
          placeholder="type here a anime name..."
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-primary mx-2 mx-md-4">Search</button>
        </form>
      </div>
      <div className="container">
        <CarouselRender data={anime}/>
      </div>
    </main>
  )
}
