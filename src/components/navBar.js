import React from 'react'
import '../stylesheets/navBar.css';

//returns a searchBar and button.
//props: 
//[searchBarOnChange: function: triggers on Search bar Change],
//[placeHolder: string: placeholder for search bar],
//[onKeyPress: function: triggers on key press of search bar],
//[submitBtnOnClick: function: triggers when button is clicked],
//[btnText: string: text that will be displayed on the button]
export default function NavBar(props) {
  return (
    <div className="navBar">
      <input id="searchBar" onChange={props.searchBarOnChange} placeholder={props.placeHolder} onKeyPress={props.onKeyPress}></input>
      <button onClick={props.submitBtnOnClick} className="submitBtn">{props.btnText}</button>
    </div>
  )
}
