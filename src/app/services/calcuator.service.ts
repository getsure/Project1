import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcuatorService {
   addOperation(firstNumber:number, secondNumber:number){
    return firstNumber+secondNumber;
   }
   subOpration(firstNumber:number, secondNumber:number){
    return firstNumber-secondNumber;
   }
}
