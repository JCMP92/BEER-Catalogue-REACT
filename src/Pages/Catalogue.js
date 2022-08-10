import './Catalogue.css';
import React, { useContext, useEffect } from 'react';
import Beer from '../Components/BeerCard';
import { Context } from '../Components/ContextComponent';

function Catalogue() {
  const {
    allBeers,
    cataloguePage,
    setCataloguePage,
    shownBeers,
    setShownBeers,
  } = useContext(Context);

  const abvZeroToFive = allBeers.filter((beer) => beer.abv < 5);
  const abvFiveToTen = allBeers.filter(
    (beer) => beer.abv <= 10 && beer.abv >= 5
  );
  const abvMoreThanTen = allBeers.filter((beer) => beer.abv > 10);

  useEffect(() => {
    setShownBeers(allBeers);
  }, [allBeers]); // eslint-disable-line

  const beers = shownBeers.map((beers) => {
    return <Beer key={beers.id} beer={beers} />;
  });

  return (
    <div className="beer-catalogue">
      <h1>SKÖL: The beer catalogue</h1>
      <h3>Page {cataloguePage}</h3>
      <div className="filter-buttons-container">
        <button
          className="filter-button"
          disabled={shownBeers === allBeers ? true : false}
          onClick={(e) => setShownBeers(allBeers)}
        >
          ALL BEERS
        </button>
        <button
          className="filter-button"
          disabled={
            shownBeers.length === abvZeroToFive.length &&
            shownBeers[0] === abvZeroToFive[0]
              ? true
              : false
          }
          onClick={() => setShownBeers(abvZeroToFive)}
        >
          ABV 0-5
        </button>
        <button
          className="filter-button"
          disabled={shownBeers.length === abvFiveToTen.length ? true : false}
          onClick={(e) => setShownBeers(abvFiveToTen)}
        >
          ABV 5-10
        </button>
        <button
          className="filter-button"
          disabled={shownBeers.length === abvMoreThanTen.length ? true : false}
          onClick={(e) => setShownBeers(abvMoreThanTen)}
        >
          ABV More than 10
        </button>
      </div>

      <div className="beers-container">{beers}</div>

      <div className="page-buttons-container">
        <button
          className="page-btn"
          disabled={cataloguePage === '1' ? true : false}
          onClick={(e) => setCataloguePage(e.target.value)}
          value="1"
        >
          1
        </button>
        <button
          className="page-btn"
          disabled={cataloguePage === '2' ? true : false}
          onClick={(e) => setCataloguePage(e.target.value)}
          value="2"
        >
          2
        </button>
        <button
          className="page-btn"
          disabled={cataloguePage === '3' ? true : false}
          onClick={(e) => setCataloguePage(e.target.value)}
          value="3"
        >
          3
        </button>
        <button
          className="page-btn"
          disabled={cataloguePage === '4' ? true : false}
          onClick={(e) => setCataloguePage(e.target.value)}
          value="4"
        >
          4
        </button>
        <button
          className="page-btn"
          disabled={cataloguePage === '5' ? true : false}
          onClick={(e) => setCataloguePage(e.target.value)}
          value="5"
        >
          5
        </button>
      </div>
    </div>
  );
}

export default Catalogue;
