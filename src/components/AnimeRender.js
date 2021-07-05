import React from 'react'

export default function AnimeRender(props) {

  const handleMessage = (score) => {
    if (score >= 0 && score <= 4) return "I do not recommend it."
    else if (score > 4 && score < 8) return "You may have fun."
    else return "Great, this is one of the best anime."

  }
  return props.animeImg.map(val => {
    return (
      <div key={val.id} className="card m-1">
        <h2 className="title">{val.title}</h2>
        <div className="image_size">
          <img className="rounded" onClick={() => window.open(val.url, "anime url")} alt="Anime IMG" src={val.image_url} />
        </div>
        <p className="score">{val.score}</p>
        <p>{handleMessage(val.score)}</p>
      </div>
    )
  })
}
