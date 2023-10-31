import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContractComponent } from './Component/contract/contract.component';
import { NewContractComponent } from './Component/new-contract/new-contract.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'newcontract', component: NewContractComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
