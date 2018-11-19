import { Component, OnInit } from '@angular/core';
import { MOCK_COMPUTERS } from '../../shared/computer.mock';
import { Computer } from 'src/app/models/computer.model';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})
export class ComputerListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'introduced', 'discontinued', 'company'];
  dataSource: Computer[] = MOCK_COMPUTERS;


  constructor() { }

  ngOnInit() {
  }

}
