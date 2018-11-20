import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './routed/company-list/company-list.component';
import { CompanyAddComponent } from './routed/company-add/company-add.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompanyUpdateComponent } from './routed/company-update/company-update.component';

@NgModule({
  declarations: [CompanyListComponent, CompanyAddComponent, CompanyUpdateComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CompanyModule { }
