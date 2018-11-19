import { Company } from './company.model';

export class Computer {
  computerId: number;
  name: string;
  introduced: Date;
  discontinued: Date;
  company: Company;
}
