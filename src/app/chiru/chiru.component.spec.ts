import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiruComponent } from './chiru.component';

xdescribe('ChiruComponent', () => {
  let component: ChiruComponent;
  let fixture: ComponentFixture<ChiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
