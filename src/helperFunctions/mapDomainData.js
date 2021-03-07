import {DomainData, AdminContact, TechnicalContact, RegistryData} from '../classes/DomainDataClasses.js';
import axios from 'axios';

//makes a get request to /getdata/ for a domain and maps the data to the data classes.
//at which point the mapped DomainData class will be returned.
//domain must be a string: can be one of the following: domain, IPv4, IPv6, or email
//if no data is returned or an error is returned due to an invalid domain query, then null is the return value of mapDomainData
//there are two structures to the response.data object. case one: where registrant is not on the base level, and case two where registrant is on the base level.
async function mapDomainData (domain) {
  var result = null;
  await axios.get(`/getdata/${domain}`)
  .then((res)=>{
    // registry data object from response 
    let regData;
    // domain name from response object
    let domainName;  
    // admin contact data from response object 
    let adminCont; 
    // technical contact data from response object 
    let techCont;
    //will represent the registry data class
    let registryData;

    //the following block runs if case 1
    if(res.data.WhoisRecord.registrant === undefined){
      //variables to DRY up the code a bit.
      regData = res.data.WhoisRecord.registryData;            //res data registry data
      domainName = res.data.WhoisRecord.domainName;           //res data domain name
      adminCont = regData.administrativeContact;              //res data administrative contact
      techCont = regData.technicalContact;                    //res data technical contact
      registryData = new RegistryData(regData.registrant);    //maps RegistryData class
      //else the following block runs case 2
    } else {
      //variables to DRY up the code a bit.
      regData = res.data.WhoisRecord.registrant;                 //res data registry data
      domainName = res.data.WhoisRecord.domainName;              //res data domain name
      adminCont = res.data.WhoisRecord.administrativeContact;    //res data administrative contact
      techCont = res.data.WhoisRecord.technicalContact;          //res data technical contact
      registryData = new RegistryData(regData);                  //maps RegistryData class
    }
    //adminContact class init
    let adminContact = new AdminContact(
      adminCont.organization,
      adminCont.email,
      adminCont.telephone
    );
    
    //technicalContact class init
    let technicalContact = new TechnicalContact(
      techCont.organization,
      techCont.email,
      techCont.telephone
    );
    
    //domainData class init
    result = new DomainData(
      adminContact,
      technicalContact, 
      registryData,
      domainName
    );
  })
  .catch(err => {
    console.log('there was an error in the getIpData helper function:', err);
  });

  return result;
}

export default mapDomainData;
