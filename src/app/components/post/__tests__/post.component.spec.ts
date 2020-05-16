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
  let openPostButton: DebugElement;
  let editButton: DebugElement;
  let saveButton: DebugElement;

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

  it('should match snapshot when post is opened', () => {
    openPostButton = fixture.debugElement.query(By.css('.post__cta'));
    openPostButton.nativeElement.click();

    fixture.detectChanges();

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

  describe('onSubmit', () => {
    beforeEach(() => {
      openPostButton = fixture.debugElement.query(By.css('.post__cta'));
      openPostButton.nativeElement.click();

      fixture.detectChanges();

      editButton = fixture.debugElement.query(By.css('.post__edit-cta'));
      editButton.nativeElement.click();

      fixture.detectChanges();

      saveButton = fixture.debugElement.query(By.css('.post__edit__cta'));
    });

    it('should save the values', () => {
      const authorField: DebugElement = fixture.debugElement.query(
        By.css('.post__edit__input')
      );

      jest.spyOn(component, 'onSubmit');
      authorField.nativeElement.value = 'Braulio Barahona';

      saveButton.nativeElement.click();
      fixture.detectChanges();
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });
});
