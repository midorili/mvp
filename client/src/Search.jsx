import React from "react";
import { useState } from "react";
import ReactDom from "react-dom";

const Search = ({ onSearch }) => {

  const [term, setTerm] = useState('')
  const [pet, setPet] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value);
    console.log('e', e.target.value)
    console.log('p', pet)
  }

  const search = () => {
    onSearch(term, pet);

    console.log('term', term)
    console.log('pet', pet)
  }


  return (
    <div className="search">
      <form id="pet-form">
        <div className="Name">
          <label className="find">Find your meow or woof now!
          </label>
          <select id="animal" value={pet}
            onChange={(e) => setPet(e.target.value)}>
            <option value="select me">Select Pet</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
          <input id="zip-form" value={term} onChange={onChange}></input>
          <button onClick={search}>Find</button>
        </div>
      </form>
    </div>
  );
}
export default Search;