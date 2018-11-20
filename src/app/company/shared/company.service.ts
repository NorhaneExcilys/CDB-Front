import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_COMPANIES } from './company.mock';
import { Company } from 'src/app/models/company.model';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
readonly SERVER_URL = 'http://10.0.1.71:8080/cdb/api/rest';
  constructor(private _httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    // return of(MOCK_COMPANIES);
    return this._httpClient.get<Company[]>(`${this.SERVER_URL}/companies`);
  }

  getCompany(id: string): Observable<Company> {
    return this._httpClient.get<Company>(`${ this.SERVER_URL}/company/${id}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this._httpClient.post<Company>(`${this.SERVER_URL}/company/name/${company.name}`, company);
  }

  updateCompany(company: Company): Observable<Company> {
    return this._httpClient.patch<Company>(`${ this.SERVER_URL }/company/${company.id}/name/${company.name}`, company);
  }

  deleteCompany(company: Company): Observable<Company> {
    return this._httpClient.delete<Company>(`${this.SERVER_URL}/company/${company.id}`);
  }
}
