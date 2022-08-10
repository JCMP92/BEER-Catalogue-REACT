import './BeerCard.css';
import { Link } from 'react-router-dom';

function Beer(props) {
  return (
    <div className="beer-card">
      <h3>
        <Link to={`/catalogue/${props.beer.name}`}>{props.beer.name}</Link>
      </h3>
      <Link to={`/catalogue/${props.beer.name}`}>
        <img src={props.beer.image_url} height="100px" alt={props.beer.name} />
      </Link>
      <h4>Alchohol by volume: {props.beer.abv}ABV</h4>
      <p>{props.beer.tagline}</p>
    </div>
  );
}

export default Beer;
