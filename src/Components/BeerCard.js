function Beer(props) {
  return (
    <div className="beer-card">
      <h3>{props.beer.name}</h3>
      <img src={props.beer.image_url} height="100px" alt={props.beer.name} />
      <h4>Alchohol by volume: {props.beer.abv}ABV</h4>
      <p>{props.beer.tagline}</p>
    </div>
  );
}

export default Beer;
