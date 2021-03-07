import {DomainData, AdminContact, TechnicalContact, RegistryData} from '../classes/DomainDataClasses.js';
import axios from 'axios';

//makes a get request to /getdata/ for a domain and maps the data to the data classes.
//at which point the mapped DomainData class will be passed into the callback.
//domain must be a string: can be one of the following: domain, IPv4, IPv6, or email
//if no data is returned or an error is returned due to an invalid domain query, then null is passed to the callback.
async function getIpData (domain) {
  var result = null;
  await axios.get(`/getdata/${domain}`)
  .then((res)=>{
  
    if(!res.data.ErrorMessage){
      //variables to DRY up the code a bit.
      let regData = res.data.WhoisRecord.registryData;     //res data registry data
      let domainName = res.data.WhoisRecord.domainName; //res data domain name
      let adminCont = regData.administrativeContact;       //res data administrative contact
      let techCont = regData.technicalContact;             //res data technical contact
  
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
      
      //registryData class init
      let registryData = new RegistryData(regData.registrant);
  
      //domainData class init
      result = new DomainData(
        adminContact,
        technicalContact, 
        registryData,
        domainName
        );
    }
  })
  .catch(err => {
    console.log('there was an error in the getIpData helper function:', err);
  });
  return result;
}

export default getIpData;
