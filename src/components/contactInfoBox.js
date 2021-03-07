import React from 'react'

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
