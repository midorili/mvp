import React from "react";
import ReactDom from "react-dom";
import PetListEntry from './PetListEntry.jsx';

const PetList = ({ pets }) => {
  return (
    <div className="pet-list-container" >
      {pets.map((pet) => {
        return (
          < div className="pet-list-box">
            < PetListEntry pet={pet} key={pet._id} />
          </div>
        )
      })}

    </div >
  )
}
export default PetList;