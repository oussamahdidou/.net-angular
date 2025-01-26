import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputmodalComponent } from './inputmodal.component';

describe('InputmodalComponent', () => {
  let component: InputmodalComponent;
  let fixture: ComponentFixture<InputmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
