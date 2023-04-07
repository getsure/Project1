import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirsBindingComponent } from './attr-dirs-binding.component';

xdescribe('AttrDirsBindingComponent', () => {
  let component: AttrDirsBindingComponent;
  let fixture: ComponentFixture<AttrDirsBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrDirsBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrDirsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
