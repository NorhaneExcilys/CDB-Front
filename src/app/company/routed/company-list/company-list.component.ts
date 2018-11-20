import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from '../../shared/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  selectedCompanies: Company[];

  constructor(private _companyService: CompanyService) {
    this._companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  ngOnInit() {

  }

  onCompanyChange($selectedCompanyId) {
    console.log($selectedCompanyId);
    this.selectedCompanies = $selectedCompanyId;
  }

  removeCompany() {
    console.log('Id companies =>', this.selectedCompanies);
    this.selectedCompanies.forEach( (companyToBeDeleted) => {
      this._companyService.deleteCompany(companyToBeDeleted).subscribe();
      this.companies.splice(this.companies.indexOf(companyToBeDeleted), 1);
    } );
  }

}
