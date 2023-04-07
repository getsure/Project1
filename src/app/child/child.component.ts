import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData:number=0;

  @Output()
  customEvent: EventEmitter<number> = new EventEmitter<number>();

  stockMarket(){
    this.childData--
    this.customEvent.emit(this.childData)
  }
  fixedDeposit(){
    this.childData++
    this.customEvent.emit(this.childData)
  }
}
