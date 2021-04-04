import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderDetailsComponent } from './oder-details.component';

describe('OderDetailsComponent', () => {
  let component: OderDetailsComponent;
  let fixture: ComponentFixture<OderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
