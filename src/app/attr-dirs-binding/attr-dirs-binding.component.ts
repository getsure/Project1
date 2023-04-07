import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dirs-binding',
  templateUrl: './attr-dirs-binding.component.html',
  styleUrls: ['./attr-dirs-binding.component.css'],
})
export class AttrDirsBindingComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  isClass1Apply: boolean = true;
  isClass2Apply: boolean = true;

  colorFromComp:string = 'orangered'
  fontFromComp:string = '30px'
}
