import React, { useEffect, useState } from 'react';

const Context = React.createContext();

function ContextProvider(props) {
  const [allBeers, setAllBeers] = useState([]);
  const [cataloguePage, setCataloguePage] = useState(1);
  console.log(allBeers);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${cataloguePage}&per_page=80`)
      .then((response) => response.json())
      .then((data) => setAllBeers(data))
      .then(window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, [cataloguePage]);

  return (
    <Context.Provider value={{ allBeers, cataloguePage, setCataloguePage }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

//'https://api.punkapi.com/v2/beers?abv_gt=7&abv_lt=10&per_page=80' Working for filter
