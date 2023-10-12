import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorComponent } from './coor.component';

describe('CoorComponent', () => {
  let component: CoorComponent;
  let fixture: ComponentFixture<CoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoorComponent]
    });
    fixture = TestBed.createComponent(CoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
