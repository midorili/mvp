import React from "react";
import ReactDom from "react-dom";

const PetListEntry = ({ pet }) => {
  console.log('currpet', pet)
  return (
    <div className="pet-list">
      <img className="pet-photo" src={pet.photo} alt="pet-photos" />
      <div className="name-city">
        <div className="name">Name: {pet.name}</div>
        {/* <div className="type">{pet.type}</div> */}
        <div className="city">City: {pet.city}</div>
      </div>
      <div className="description">{pet.description}</div>
      <div className="phone-email">
        <a className="email" href="mailto:midorili998@gmail.com">{pet.email}</a>
        <div className="phone">Phone: {pet.phone}</div>
      </div>
    </div>
  )
}


export default PetListEntry;