


/**
 * addCerts("identity", [
 *  { 
 *    property: "VietGapCertificate", 
 *    type: "VietGapCertificate", 
 *    data: new VietGapCertificate({company:"demo"}),  
 *    expires: new Date().getTime(),
 *  }
 * ])
 */


export class VietGapCertificate {
  constructor(data) {
    this.company = data.company;
    this.phone = data.phone;
    this.email = data.email;
    this.address = data.address;
    this.website = data.website;
    this.certificate_registration_code =data.certificate_registration_code;
    this.total_production_area = data.total_production_area
    this.product_or_group = data.product_or_group;
    this.predictive_production = data.predictive_production
  }
}


export class EmployeeCertificate {
  constructor(data) {
    this.company = data.company;
    this.job_title = data.job_title;
    this.department = data.department;
  }
}