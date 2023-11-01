import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ContractService } from 'src/app/Services/service/contract.service';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from 'src/app/dialogs/update-dialog/update-dialog.component';
import { Contract } from 'src/app/interfaces/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contractsDataArray: Contract[] = [];

  dataSource = new MatTableDataSource<Contract>();

  columnsToDisplay = ['FirstName', 'LastName', 'PhoneNumber', 'Address', 'Update', 'Delete'];
  constructor(private contractService: ContractService, private dialog: MatDialog){}

  ngOnInit(){
 this.contractsDataArray = this.contractService.getContract()
 this.dataSource = new MatTableDataSource<Contract>(this.contractsDataArray);
  console.log(this.contractsDataArray);
  }

  onUpdate(contract: Contract){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contract
    });
  }

  onDelete(contract: Contract){
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: contract
    });

    dialogRef.afterClosed().subscribe(result => {
     this.updateDatasource(this.contractsDataArray);
    });
  
  }

  updateDatasource(dataArray: Contract[]){
  this.dataSource.connect().next(dataArray);
  
}
}
