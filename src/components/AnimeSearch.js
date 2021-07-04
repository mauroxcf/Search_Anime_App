import React, {useState} from 'react'
import axios from 'axios';

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


  /* if (error) return "<PageError />" */
  if (loading) return "<Loader />"

  const HandleSearch = (e) => {
    e.preventDefault()
    fetchData().then( (res) => {
      /* if (res === undefined) return alert("error") */
      console.log('la respuesta es:')
      console.log(res)
      setAnime(res)
    })
  }
  return (
    <main>
      <div>
        <form className="" onSubmit={HandleSearch}>
          <input
          type="search"
          placeholder="type here a anime name..."
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        </form>
        <button onClick={HandleSearch} className="btn btn-primary mx-2 mb-2"></button>
      </div>
    </main>
  )
}
