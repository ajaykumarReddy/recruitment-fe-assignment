/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransaferAddComponent } from './transafer-add.component';

describe('TransaferAddComponent', () => {
  let component: TransaferAddComponent;
  let fixture: ComponentFixture<TransaferAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaferAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
