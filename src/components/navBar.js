import React from 'react'

export default function NavBar(props) {
  return (
    <div className="navBar">
      <input id="searchBar" onChange={props.searchBarOnChange} placeholder={props.placeHolder} onKeyPress={props.onKeyPress}></input>
      <button onClick={props.submitBtnOnClick} className="submitBtn">{props.btnText}</button>
    </div>
  )
}
