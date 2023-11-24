/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivreJournalComponent } from './LivreJournal.component';

describe('LivreJournalComponent', () => {
  let component: LivreJournalComponent;
  let fixture: ComponentFixture<LivreJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
