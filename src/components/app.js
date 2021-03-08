import React, { Component } from 'react';
import mapDomainData from '../helperFunctions/mapDomainData.js';
import DataView from './dataView.js'
import NavBar from './navBar.js';
import '../stylesheets/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       domainData: null,
       query: '',
       error: false,
    };
    this.searchForDomain = this.searchForDomain.bind(this);
    this.searchBarOnChange = this.searchBarOnChange.bind(this);
    this.submitBtnOnClick = this.submitBtnOnClick.bind(this);
    this.searchBarOnKeyPress = this.searchBarOnKeyPress.bind(this);
  }

  //updates the states query string as you type in the searchbar. TODO: add search on enter
  searchBarOnChange(e){
    this.setState({
      query: e.target.value
    })
  }
  //searches for domain if the enter key is hit on search bar
  searchBarOnKeyPress(e){
    if(e.key === 'Enter'){
      this.searchForDomain();
      e.target.value = '';
    }
  }

  //on click function for search button. resets search bar value.
  submitBtnOnClick(){
    this.searchForDomain();
    document.getElementById('searchBar').value = '';
  }

  //searches for domain data with query and updates state with the new data
  async searchForDomain (){
    var data = await mapDomainData(this.state.query);
    if(data === null){
      this.setState({error: true})
    } else{
      this.setState({
        domainData: data,
        error: false
      });
    }
  }

  render() {
    //catches errors or failed search results;
    if (this.state.error){
      return(
        <div className="appContainer">
        <NavBar placeHolder="Domain, IP or Email..." searchBarOnChange={this.searchBarOnChange} submitBtnOnClick={this.submitBtnOnClick} btnText="Search" onKeyPress={this.searchBarOnKeyPress}/>
        <div className="simpleDirections">
          I'm sorry, I cant seem to find that one :'( try searching for something else!
        </div>
      </div>
      )
    }
    //initial start up template directions (mostly for fun);
    if(!this.state.domainData){
      return(
        <div className="appContainer">
          <NavBar placeHolder="Domain, IP or Email..." searchBarOnChange={this.searchBarOnChange} submitBtnOnClick={this.submitBtnOnClick} btnText="Search" onKeyPress={this.searchBarOnKeyPress}/>
          <div className="simpleDirections">
            Try searching for an IP address, Domain, or Email! :)
          </div>
        </div>
      );
    } 
    //renders data received form API;
    return (
      <div className="appContainer">
        <NavBar placeHolder="Domain, IP or Email..." searchBarOnChange={this.searchBarOnChange} submitBtnOnClick={this.submitBtnOnClick} btnText="Search" onKeyPress={this.searchBarOnKeyPress}/>
        <DataView domainData={this.state.domainData} searchBarOnChange={this.searchBarOnChange} submitBtnOnClick={this.submitBtnOnClick}/>
      </div>
    )
  }
}
