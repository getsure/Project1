import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {  }

  isDisplayElement:boolean = false;
  course:string = "php"
  names:string[] = ['chiru','suresh', 'laxmi', 'monika']

  employees = [
    {empId:101, empName:"chiru", empSal:50000},
    {empId:102, empName:"suresh", empSal:40000},
    {empId:103, empName:"ramesh", empSal:60000},
  ]

}
