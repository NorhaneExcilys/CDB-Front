import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from '../../shared/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  company: Company;
  emptyName = false;
  alertMessage = '';

  constructor(private _route: ActivatedRoute, private _router: Router, private _companyService: CompanyService) {
    this.company = new Company();
   }

  ngOnInit() {
  }

  newCompany() {
    if (this.company.name === undefined || this.company.name.trim() === '') {
      this.alertMessage = 'This is an incorrect name';
      this.emptyName = true;
    } else {
      this._companyService.addCompany(this.company).subscribe(() => this._router.navigate(['companies']));
    }
  }

}
