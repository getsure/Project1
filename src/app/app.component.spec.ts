import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalcuatorService } from './services/calcuator.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[CalcuatorService]
    }).compileComponents();
  });

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'angproject1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angproject1');
  });

  // xit('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angproject1 app is running!');
  // });

  it('service add method', ()=>{
    const calcSrvc = TestBed.inject(CalcuatorService)
    const addRes = calcSrvc.addOperation(6,4)
    expect(addRes).toEqual(10)
  })


});
