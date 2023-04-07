import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  data:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.obs.subscribe(res => this.data = res)
  }

  upateData(){
     this.dataService.changeData("Hello, This is component-1")
  }
}
