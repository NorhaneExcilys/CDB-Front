import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from '../../shared/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(private _companyService: CompanyService) {
    this._companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  ngOnInit() {

  }

}
