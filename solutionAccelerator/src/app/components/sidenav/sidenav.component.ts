import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  processType: string;
  ingestionType: string;
  processList: string[] = ['Data Ingestion', 'Transformation', 'ML Analytics', 'Data Visualization'];
  ingestionList: string[] = ['OnPrem Data Ingestion', 'Azure Cloud Data Ingestion'];
  dataType: string;
  dataTypeList: string[] = ['structure', 'non structure'];
  constructor() { }

  ngOnInit(): void {
  }

}
