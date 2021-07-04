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
        <p>{val.title}</p>
        <img className="rounded" onClick={() => window.open(val.url, "anime url")} alt="Anime IMG" src={val.image_url} />
        <p>{val.score}</p>
        <p>{handleMessage(val.score)}</p>
      </div>
    )
  })
}
