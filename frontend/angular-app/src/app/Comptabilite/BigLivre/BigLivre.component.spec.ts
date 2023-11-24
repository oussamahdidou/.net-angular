/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BigLivreComponent } from './BigLivre.component';

describe('BigLivreComponent', () => {
  let component: BigLivreComponent;
  let fixture: ComponentFixture<BigLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
