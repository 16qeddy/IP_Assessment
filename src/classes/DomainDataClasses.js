
//contains overall IP Data for UI display. uses admin and technical contact classes as well as registry data class
export class DomainData {
  constructor(adminContact, technicalContact, registryData, domainName){
    this.domainName = domainName;
    this.adminContact = adminContact;
    this.technicalContact = technicalContact;
    this.registryData = registryData;
  }
}

//maintains org, email and telephone. used as super for admin and technical contact classes
export class Contact {
  constructor(organization, email, telephone){
    this.organization = organization || 'N/A';
    this.email = email || 'N/A';
    this.telephone = telephone || 'N/A';
  }
}

//subclass of Contact for admin contact data
export class AdminContact extends Contact {
  constructor(organization, email, telephone){
    super(organization, email, telephone);
  }
}

//subclass of Contact for Technical contact data
export class TechnicalContact extends Contact {
  constructor(organization, email, telephone){
    super(organization, email, telephone);
  }
}

//maintains registry data to be used in IpData class
export class RegistryData {
  constructor(dataObject){
    this.organization = dataObject.organization || 'N/A';
    this.street = dataObject.street1 || 'N/A';
    this.city = dataObject.city || 'N/A';
    this.state = dataObject.state || 'N/A';
    this.postalCode = dataObject.postalCode || 'N/A';
    this.country = dataObject.country || 'N/A';
    this.countryCode = dataObject.countryCode || 'N/A';
  }
}
