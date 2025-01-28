import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsmodalComponent } from './optionsmodal.component';

describe('OptionsmodalComponent', () => {
  let component: OptionsmodalComponent;
  let fixture: ComponentFixture<OptionsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
