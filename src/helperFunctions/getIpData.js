import {DomainData, AdminContact, TechnicalContact, RegistryData} from '../classes/DomainDataClasses.js';
import axios from 'axios';

//makes a get request to /getdata/ for a domain and maps the data to the data classes.
//at which point the mapped DomainData class will be passed into the callback.
//domain must be a string: can be one of the following: domain, IPv4, IPv6, or email
function getIpData (domain, callback) {
  axios.get(`/getdata/${domain}`)
  .then((res)=>{
    //variables to DRY up the code a bit.
    let data = res.data.WhoisRecord.registryData; //res data registry data
    let domainName = res.data.WhoisRecord.domainName; //res data domain name
    let adminCont = data.administrativeContact; //res data administrative contact
    let techCont = data.technicalContact; //res data technical contact

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
    let registryData = new RegistryData(data.registrant);

    //domainData class init
    let domainData = new DomainData(
      adminContact,
      technicalContact, 
      registryData,
      domainName
      );

      callback(domainData);
  })
  .catch(err => {
    console.log('there was an error in getIpData', err);
  })
}

export default getIpData;
