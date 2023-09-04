import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VELOTAXComponent } from './velotax.component';

describe('VELOTAXComponent', () => {
  let component: VELOTAXComponent;
  let fixture: ComponentFixture<VELOTAXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VELOTAXComponent]
    });
    fixture = TestBed.createComponent(VELOTAXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
