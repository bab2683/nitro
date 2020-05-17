import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeButtonComponent } from '../tree-button.component';

describe('TreeButtonComponent', () => {
  let component: TreeButtonComponent;
  let fixture: ComponentFixture<TreeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeButtonComponent);
    component = fixture.componentInstance;
    component.data = {
      title: 'Posts',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
