import { TestBed } from '@angular/core/testing';

import { CalcuatorService } from './calcuator.service';

//group of tests for the calc services
describe('CalcuatorService', () => {
  let service: CalcuatorService;

  //ininitialization of component, service...etc
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcuatorService);
  });

  //individual test -> instsance got created
  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });
  //add operations
  it('validate the addition result is equal to 10', ()=>{
    const addResult = service.addOperation(6,4)
    expect(addResult).toBe(10)
  })
    //add operations
    it('validate the addition result is equal to 10', ()=>{
      const addResult = service.addOperation(6,4)
      expect(addResult).toBe(10)
    })
  //sub operation
  it('validate the subtraction result is equal to 2', ()=>{
    const addResult = service.subOpration(6,4)
    expect(addResult).toBe(2)
  })

});
