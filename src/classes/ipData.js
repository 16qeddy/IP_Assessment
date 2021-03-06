
//contains overall IP Data for UI display. uses admin and technical contact classes as well as registry data class
export default class IpData {
  constructor(adminContact, technicalContact, registryData, domainName){
    this.domainName = domainName;
    this.adminContact = adminContact;
    this.technicalContact = technicalContact;
    this.registryData = registryData;
  }
}

//maintains org, email and telephone. used as super for admin and technical contact classes
export default class Contact {
  constructor(organization, email, telephone){
    this.organization = organization;
    this.email = email;
    this.telephone = telephone;
  }
}

//subclass of Contact for admin contact data
export default class AdminContact extends Contact {
  constructor(organization, email, telephone){
    super(organization, email, telephone);
  }
}

//subclass of Contact for Technical contact data
export default class TechnicalContact extends Contact {
  constructor(organization, email, telephone){
    super(organization, email, telephone);
  }
}

//maintains registry data to be used in IpData class
export default class RegistryData {
  constructor(dataObject){
    this.organization = dataObject.organization;
    this.street = dataObject.street1;
    this.city = dataObject.city;
    this.state = dataObject.state;
    this.postalCode = dataObject.postalCode;
    this.country = dataObject.country;
    this.countryCode = dataObject.countryCode;
  }
}
