import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpagoComponent } from './mpago.component';

describe('MpagoComponent', () => {
  let component: MpagoComponent;
  let fixture: ComponentFixture<MpagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MpagoComponent]
    });
    fixture = TestBed.createComponent(MpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
