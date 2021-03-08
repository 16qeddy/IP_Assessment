import React from 'react'
import '../stylesheets/contactInfoBox.css';

//returns styled boxes for different types of contact info
//props: [header: desired header text: string] [contactData: data object with values organization, email and telephone: all strings]
export default function ContactInfoBox(props) {
  return (
    <div className="contactDataContainer">
      <h4>{props.header}</h4>
      <div className="contactDataBox">
        <div>Organization: {props.contactData.organization}</div>
        <div>Email: {props.contactData.email}</div>
        <div>Telephone: {props.contactData.telephone}</div>
      </div>
    </div>
  )
}
