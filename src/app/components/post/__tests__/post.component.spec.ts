import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { PostComponent } from '../post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let formBuilder: FormBuilder;
  let editButton: DebugElement;
  let saveChangesButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      providers: [FormBuilder],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.get(FormBuilder);
    component.post = {
      author: 'Braulio',
      location: 'Dublin',
      id: 0,
      time: '1589642098034',
      text: '',
      summary: '',
      date: new Date(1589642098034),
      weekNumber: 21,
      open: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('ngOnInit', () => {
    it('should create the form', () => {
      jest.spyOn(formBuilder, 'group');

      component.ngOnInit();
      fixture.detectChanges();

      expect(formBuilder.group).toHaveBeenCalled();
    });
  });

  it('should match snapshot when edit panel is open', () => {
    editButton = fixture.debugElement.query(By.css('.post__edit-cta'));

    editButton.triggerEventHandler('clicked', null);
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  describe('onSubmit', () => {
    beforeEach(() => {
      component.editing = true;

      fixture.detectChanges();
    });

    it('should save the values', () => {
      const authorField: DebugElement = fixture.debugElement.query(
        By.css('.post__edit__input')
      );

      saveChangesButton = fixture.debugElement.query(
        By.css('.post__edit__cta')
      );

      jest.spyOn(component, 'onSubmit');
      authorField.nativeElement.value = 'Braulio Barahona';

      saveChangesButton.triggerEventHandler('clicked', null);

      fixture.detectChanges();
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });
});
