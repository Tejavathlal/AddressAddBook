import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContractService } from 'src/app/Services/service/contract.service';
import { Contract } from 'src/app/interfaces/contract';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit{

  contracttoupdate! : Contract;

  updatecontract! : Contract;

  updateForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(16)]),
    lastName: new FormControl('' ,[Validators.required, Validators.maxLength(16)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    address: new FormControl('' ,[Validators.required, Validators.maxLength(200)]),
  });

  constructor( public dialogRef: MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Contract, private contactService: ContractService){

    this.contracttoupdate = data;
  }

  ngOnInit(){
    this.updateForm.controls['firstName'].setValue(this.contracttoupdate.FirstName),
    this.updateForm.controls['lastName'].setValue(this.contracttoupdate.LastName),
    this.updateForm.controls['phoneNumber'].setValue(this.contracttoupdate.PhoneNumber),
    this.updateForm.controls['address'].setValue(this.contracttoupdate.Address),
    console.log(this.contracttoupdate);
  }

 

  onSubmit(){
    this.updatecontract = {
      id : this.contracttoupdate.id,
      FirstName: this.updateForm.controls['firstName'].value as string,
      LastName: this.updateForm.controls['lastName'].value as string,
      PhoneNumber: this.updateForm.controls['phoneNumber'].value as string,
      Address: this.updateForm.controls['address'].value as string,
    }
    this.contactService.updatecontract(this.updatecontract);
    console.log(this.contactService.getContract())
    this.dialogRef.close();
  }
}
