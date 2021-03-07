import React, { Component } from 'react';
import getIpData from '../helperFunctions/getIpData.js';
import DataView from './dataView.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       domainData: null,
       query: '136.34.193.116',
       error: false
    };
    this.searchForDomain = this.searchForDomain.bind(this);
  }
  componentDidMount(){
    this.searchForDomain();
  }

  //searches for domain data with query and updates state with the new data
  async searchForDomain (){
    var data = await getIpData(this.state.query);
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
    if(!this.state.domainData){
      return(null);
    }
    return (
      <div className="appContainer">
        <DataView domainData={this.state.domainData}/>
      </div>
    )
  }
}
