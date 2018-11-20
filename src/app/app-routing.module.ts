import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/routed/company-list/company-list.component';
import { CompanyAddComponent } from './company/routed/company-add/company-add.component';
import { ComputerListComponent } from './computer/routed/computer-list/computer-list.component';
import { CompanyUpdateComponent } from './company/routed/company-update/company-update.component';

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
},
{
  path: 'companies/update/:id',
  component: CompanyUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
