import React from "react";
import { useState, useEffect } from 'react';
import ReactDom from "react-dom";
import Search from './Search.jsx'
import PetList from './PetList.jsx'
import PetListEntry from './PetListEntry.jsx'
import $ from 'jquery'

const App = () => {

  const [pets, setPets] = useState([])

  const pageLoad = (term) => {
    $.ajax({
      type: "GET",
      url: 'http://localhost:9500/pets',
      success: (data) => {
        // console.log('dataInGet', data)
        setPets(data)
      },
      error: () => {
        console.log('error')
      }
    })

  }
  useEffect(() => {
    pageLoad();
  }, pets)

  const search = (term, pet) => {
    console.log(`${term} was searched`)
    console.log(`${pet} was searched`)
    $.ajax({
      type: "POST",
      url: 'http://localhost:9500/pets',
      data: { term, pet },
      success: (data) => {
        // console.log('dataTerm', data)
        pageLoad()
      },
      error: () => {
        console.log('error')
      }
    })

  }

  return (
    <div className="pet-index">
      <div className="top-bar">
        <div className="header"><h1> MeowWoof </h1>

        </div>

        <Search onSearch={search} />
      </div>
      <PetList pets={pets} />

    </div>

  );
}

ReactDom.render(<App />, document.getElementById('app'));
