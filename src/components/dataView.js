import React from 'react'

export default function DataView(props) {
    const {organization, street, city, state, postalCode, country} = props.domainData.registryData;

  return (
    <div className="dataViewContainer">
      <div className="navBar">
        <input className="searchBar" onKeyPress={props.searchBarOnKeyPress} placeholder="Domain name, IP address, Email address"></input>
        <button onclick={props.submitBtnOnClick} className="submitBtn">Search</button>
      </div>
      <h3>{`Domain Name: ${props.domainData.domainName}` || 'Domain Name: <domainName here>'}</h3>
      <div className="regDataContainer">
        <h3>RegistryData:</h3>
        <div className="regData">
          <div>Organization: {organization}</div>
          <div>Street: {street}</div>
          <div>City: {city}</div>
          <div>State: {state}</div>
          <div>PostalCode: {postalCode}</div>
          <div>Country: {country}</div>
        </div>
      </div>
      <div className="adminDataContainer">
        <h4>Admin Contact:</h4>
        <div className="adminData">
          <div>Organization: {props.domainData.adminContact.organization}</div>
          <div>Email: {props.domainData.adminContact.email}</div>
          <div>Telephone: {props.domainData.adminContact.telephone}</div>
        </div>
      </div>
      <div className="techDataContainer">
        <h4>Technical Contact:</h4>
        <div className="techData">
          <div>Organization: {props.domainData.technicalContact.organization}</div>
          <div>Email: {props.domainData.technicalContact.email}</div>
          <div>Telephone: {props.domainData.technicalContact.telephone}</div>
        </div>
      </div>
    </div>
  )
}
