import React from 'react'
import RegistryData from './registryData.js';
import ContactInfoBox from './contactInfoBox.js';
import '../stylesheets/dataView.css';

//combines multiple components and returns a fully mapped DataView.
//props: [domainData: a class returned from the mapDomainData function]
export default function DataView(props) {
  return (
    <div className="dataViewContainer">
      <div className="domainNameContainer">
        <h1 className="domainNameLabel">{`Domain Name`}</h1>
        <h1 className="domainName">{props.domainData.domainName}</h1>
      </div>
      <div className="dataCard">
      <RegistryData registryData={props.domainData.registryData}/>
      <div className="contactInfoCard">
        <ContactInfoBox header="Admin Contact" contactData={props.domainData.adminContact}/>
        <ContactInfoBox header="Technical Contact" contactData={props.domainData.technicalContact}/>
      </div>
      </div>
    </div>
  )
}
