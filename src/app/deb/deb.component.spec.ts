import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebComponent } from './deb.component';

describe('DebComponent', () => {
  let component: DebComponent;
  let fixture: ComponentFixture<DebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebComponent]
    });
    fixture = TestBed.createComponent(DebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
