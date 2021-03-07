import React, { Component } from 'react';
import getIpData from '../helperFunctions/getIpData.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       domainData: {},
       query: '136.34.193.116'
    };

    this.searchForDomain = this.searchForDomain.bind(this);
  }

  //searches for domain data with query and updates state with the new data
  searchForDomain(){
    getIpData(
      this.state.query, 
      (data)=>{
      this.setState({
        domainData: data
      })
    });
  }

  render() {
    return (
      <div>
    
      </div>
    )
  }
}
