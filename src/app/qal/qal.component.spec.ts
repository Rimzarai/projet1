import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalComponent } from './qal.component';

describe('QalComponent', () => {
  let component: QalComponent;
  let fixture: ComponentFixture<QalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalComponent]
    });
    fixture = TestBed.createComponent(QalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
