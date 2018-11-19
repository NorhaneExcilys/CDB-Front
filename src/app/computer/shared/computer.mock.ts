import { Computer } from '../../models/computer.model';
import { MOCK_COMPANIES } from 'src/app/company/shared/company.mock';

export const MOCK_COMPUTERS: Computer[] = [
  {
    computerId: 0,
    name: 'Computer 0',
    introduced: new Date('February 4, 2018 10:13:00'),
    discontinued: null,
    company: MOCK_COMPANIES[0],
  },
  {
    computerId: 1,
    name: 'Computer 1',
    introduced: null,
    discontinued: new Date('September 25, 1992 10:13:00'),
    company: MOCK_COMPANIES[0]
  },
  {
    computerId: 2,
    name: 'Computer 2',
    introduced: new Date('September 24, 1992 10:13:00'),
    discontinued: new Date('September 25, 1992 10:13:00'),
    company: MOCK_COMPANIES[1],
  },
  {
    computerId: 3,
    name: 'Computer 3',
    introduced: null,
    discontinued: null,
    company: MOCK_COMPANIES[0],
  },
  {
    computerId: 4,
    name: 'Computer 4',
    introduced: null,
    discontinued: null,
    company: MOCK_COMPANIES[0],
  }
];
