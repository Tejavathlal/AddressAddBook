import { Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContractService } from 'src/app/Services/service/contract.service';
import { Contract } from 'src/app/interfaces/contract';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  contactTodelete! : Contract;

  deleteForm = new FormGroup({
    firstName: new FormControl({value: '', disabled: true}),
    lastName: new FormControl({value: '', disabled: true}),
    phoneNumber: new FormControl({value: '', disabled: true}),
    address: new FormControl({value: '', disabled: true}),
  });

  idToDelete!: number;

  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Contract, private contactService: ContractService){
    this.contactTodelete = data;
  }

  ngOnInit(){
    this.deleteForm.controls['firstName'].setValue(this.contactTodelete.FirstName),
    this.deleteForm.controls['lastName'].setValue(this.contactTodelete.LastName),
    this.deleteForm.controls['phoneNumber'].setValue(this.contactTodelete.PhoneNumber),
    this.deleteForm.controls['address'].setValue(this.contactTodelete.Address),
    console.log(this.contactTodelete);
  }


  onSubmit(){

    let contactId = this.contactTodelete.id;
    this.contactService.deleteContact(contactId);
    console.log(this.contactService.getContract())
    this.dialogRef.close();
  }
}
