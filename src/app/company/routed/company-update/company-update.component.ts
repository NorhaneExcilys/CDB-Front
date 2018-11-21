import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CompanyService } from '../../shared/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {
  id: string;
  companyForm: FormGroup;
  emptyName = false;
  alertMessage = '';

  @Input()
  company: Company;

  constructor(private _companyService: CompanyService, private _route: ActivatedRoute, private _router: Router, private _fb: FormBuilder) {
    this.companyForm = this._fb.group({
      name: ['']
    });
   }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log('id', this.id);
    this._companyService.getCompany(this.id).subscribe(recipe => {
      this.company = recipe;
      this.companyForm.patchValue({
        name: recipe.name
      });
    });
  }

  updateCompany() {
    if (this.company.name === undefined || this.company.name.trim() === '') {
      this.alertMessage = 'This is an incorrect name';
      this.emptyName = true;
    } else {
      this.company.name = this.companyForm.get('name').value;
      this._companyService.updateCompany(this.company).subscribe(
        () => {
          console.log('next');
          this._router.navigate(['/companies']);
        },
        error => console.log('error', error)
      );
    }
  }
}
