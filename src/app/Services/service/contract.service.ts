import { Injectable } from '@angular/core';
import { Contract } from 'src/app/interfaces/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [

    { id: 1, FirstName: "Mangilal", LastName: "Tejavath", PhoneNumber: "7893024985", Address: "4-59, Rekulathanda, Seerolu, Mahabubabad" },
    { id: 2, FirstName: "Harilal", LastName: "Tejavath", PhoneNumber: "9441923519", Address: "4-59, Rekulathanda, Seerolu, Mahabubabad" },
    { id: 3, FirstName: "Naresh", LastName: "Tejavath", PhoneNumber: "8074408492", Address: "4-59, Rekulathanda, Seerolu, Mahabubabad" }
  ]

  constructor() { }

  getContract() {
    return this.contracts;
  }

  createContract(newcontract: Contract) {
    let heightId = 0;
    this.contracts.forEach(contactObject => {
      if (contactObject.id > heightId) {
        heightId = contactObject.id;
      }
    })
    this.contracts.push({
      id: heightId + 1,
      FirstName: newcontract.FirstName,
      LastName: newcontract.LastName,
      PhoneNumber: newcontract.PhoneNumber,
      Address: newcontract.Address

    })
  }

  updatecontract(updatecontract: Contract) {

    const index = this.contracts.findIndex(contact => contact.id == updatecontract.id);
    this.contracts[index].FirstName = updatecontract.FirstName;
    this.contracts[index].LastName = updatecontract.LastName;
    this.contracts[index].PhoneNumber = updatecontract.PhoneNumber;
    this.contracts[index].Address = updatecontract.Address;

  }

  deleteContact(id: number){
    const index = this.contracts.findIndex(contact => contact.id == id);
    this.contracts.splice(index,1);
  }

}
