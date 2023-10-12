import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiniComponent } from './fini.component';

describe('FiniComponent', () => {
  let component: FiniComponent;
  let fixture: ComponentFixture<FiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiniComponent]
    });
    fixture = TestBed.createComponent(FiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
