/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddComptableComponent } from './Add-Comptable.component';

describe('AddComptableComponent', () => {
  let component: AddComptableComponent;
  let fixture: ComponentFixture<AddComptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
