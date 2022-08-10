import { useParams } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { Context } from './ContextComponent';
import { useNavigate } from 'react-router-dom';

function BeerDetails() {
  useEffect(() => {});
  const navigate = useNavigate();
  const { allBeers } = useContext(Context);
  const { beerName } = useParams();

  const thisBeer = allBeers.find((beer) => beer.name === beerName);

  //I use the if statement here to check if the variable thisBeer has a value assigned, if it has no value assigned it kind of wait until it does,
  // then it proceeds to use it´s values (thisBeer.name, thisBeer.image_url, etc.).
  if (thisBeer) {
    return (
      <div className="beer-detail">
        <h2>{thisBeer.name}</h2>
        <h4>{thisBeer.tagline}</h4>
        <img src={thisBeer.image_url} height="200px" alt={thisBeer.name} />
        <h3>{thisBeer.abv}</h3>
        <h4>Description:</h4>
        <p>{thisBeer.description}</p>
        <h4>Food pairing:</h4>
        {thisBeer.food_pairing.map((food) => (
          <div key={food}>
            <p>{food}</p>
          </div>
        ))}
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }
}

export default BeerDetails;
