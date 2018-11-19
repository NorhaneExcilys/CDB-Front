import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_COMPANIES } from './company.mock';
import { Company } from 'src/app/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return of(MOCK_COMPANIES);
  }

  addCompany(company: Company): Observable<Company[]> {
    MOCK_COMPANIES[3] = company;
    return of(MOCK_COMPANIES);
  }
}
