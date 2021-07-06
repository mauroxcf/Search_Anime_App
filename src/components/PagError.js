


function PagError(props) {
  console.log(props.err)
  return (
    <div className="alert alert-danger alert-dismissible fade show m-2" role="alert">
      <h2>UPS! Unable to get Gifs, please refresh the page and try again later</h2>
    </div>
  )
}

export default PagError;
