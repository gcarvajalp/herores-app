import React from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';


const SearchScreen = () => {

  const heroesFiltered = heroes;

  const [formValues, handleInputChange] = useForm({
    search: ''
  });

  const {search}= formValues;

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="search"
              autoComplete="off"
              value={search}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary">
              Seach...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default SearchScreen