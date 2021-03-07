import React from 'react'
import RegistryData from './registryData.js';
import ContactInfoBox from './contactInfoBox.js';

export default function DataView(props) {
  return (
    <div className="dataViewContainer">
      <h3>{`Domain Name: ${props.domainData.domainName}` || 'Domain Name: <domainName here>'}</h3>
      <RegistryData registryData={props.domainData.registryData}/>
      <ContactInfoBox header="Admin Contact:" contactData={props.domainData.adminContact}/>
      <ContactInfoBox header="Technical Contact:" contactData={props.domainData.technicalContact}/>
    </div>
  )
}
