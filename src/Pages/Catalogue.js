import React, { useContext } from 'react';
import Beer from '../Components/BeerCard';
import { Context } from '../Components/ContextComponent';

function Catalogue() {
  const { allBeers, cataloguePage, setCataloguePage } = useContext(Context);
  const beers = allBeers.map((beers) => {
    return <Beer key={beers.id} beer={beers} />;
  });

  function changePage(num) {
    setCataloguePage(num);
  }

  return (
    <div>
      <h1>BEER Catalogue - Page {cataloguePage}</h1>
      <div className="beers-container">{beers}</div>
      <div className="buttons-container">
        <button
          disabled={cataloguePage === 1 ? true : false}
          onClick={() => changePage(1)}
        >
          1
        </button>
        <button
          disabled={cataloguePage === 2 ? true : false}
          onClick={() => changePage(2)}
        >
          2
        </button>
        <button
          disabled={cataloguePage === 3 ? true : false}
          onClick={() => changePage(3)}
        >
          3
        </button>
        <button
          disabled={cataloguePage === 4 ? true : false}
          onClick={() => changePage(4)}
        >
          4
        </button>
        <button
          disabled={cataloguePage === 5 ? true : false}
          onClick={() => changePage(5)}
        >
          5
        </button>
      </div>
    </div>
  );
}

export default Catalogue;

//https://api.punkapi.com/v2/beers?abv_gt=5   EXAMPLE PF THE API CALL FILTER TO SEARCH ONLY THE ABV GREATER THAN 5
