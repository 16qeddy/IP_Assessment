import React from 'react'
import '../stylesheets/registryData.css';

//returns styled data card for registry data
//props: [registryData: obj: an object containing the registry organization, street, city, state, postalCode,  and country: all strings]
export default function RegistryData(props) {
  const {organization, street, city, state, postalCode, country} = props.registryData;
  return (
  <div className="regDataContainer">
    <h3 className="regDataHeader">Registry Data</h3>
      <div className="regData">
      <div>Organization: {organization}</div>
      <div>Street: {street}</div>
      <div>City: {city}</div>
      <div>State: {state}</div>
      <div>PostalCode: {postalCode}</div>
      <div>Country: {country}</div>
    </div>
  </div>
  )
}
