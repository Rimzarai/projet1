import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IternetComponent } from './iternet.component';

describe('IternetComponent', () => {
  let component: IternetComponent;
  let fixture: ComponentFixture<IternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IternetComponent]
    });
    fixture = TestBed.createComponent(IternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
