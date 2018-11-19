import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/routed/company-list/company-list.component';
import { CompanyAddComponent } from './company/routed/company-add/company-add.component';
import { ComputerListComponent } from './computer/routed/computer-list/computer-list.component';

const routes: Routes = [{
  path: 'companies',
  component: CompanyListComponent
},
{
  path: 'computers',
  component: ComputerListComponent
},
{
  path: 'companies/add',
  component: CompanyAddComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
