import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any = 'Hi All !'
  private bs = new BehaviorSubject(this.data)
  obs = this.bs.asObservable();  

  changeData(modData:any){
    this.bs.next(modData)
  }

}

