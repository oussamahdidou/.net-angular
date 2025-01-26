import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiliserComponent } from './initiliser.component';

describe('InitiliserComponent', () => {
  let component: InitiliserComponent;
  let fixture: ComponentFixture<InitiliserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiliserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
