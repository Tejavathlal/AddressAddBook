import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/Services/service/contract.service';
import { Contract } from 'src/app/interfaces/contract';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent {

  newcontract!: Contract;

  contractForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(16)]),
    lastName: new FormControl('' ,[Validators.required, Validators.maxLength(16)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    address: new FormControl('' ,[Validators.required, Validators.maxLength(200)]),
  });

  constructor(private router:Router, private contractService: ContractService){}

  onSubmit(){

    this.newcontract = {
      id : 0,
      FirstName: this.contractForm.controls['firstName'].value as string,
      LastName: this.contractForm.controls['lastName'].value as string,
      PhoneNumber: this.contractForm.controls['phoneNumber'].value as string,
      Address: this.contractForm.controls['address'].value as string,
    }
    this.contractService.createContract(this.newcontract);
    console.log(this.contractForm.value);

    this.router.navigate(['/contract'])
  }
  onCancel(){
 this.router.navigate(['/contract'])
  }

}
