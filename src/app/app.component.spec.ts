import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { RequestService } from '@services';
import { AppComponent } from './app.component';

const RequestServiceMock = {
  get: jest.fn().mockReturnValue(
    of({
      data: [
        {
          id: 1,
          location: 'San Francisco',
          time: '1582848000000',
          author: 'Happy User',
          text:
            'Proper PDF conversion ensures that every element of your document remains just as you left it.',
        },
        {
          id: 2,
          location: 'San Francisco',
          time: '1582848000000',
          author: 'Happy User',
          text:
            'Proper PDF conversion ensures that every element of your document remains just as you left it.',
        },
      ],
    })
  ),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: RequestService,
          useValue: RequestServiceMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should request the posts', () => {
      expect(component.posts$).toBeUndefined();

      component.ngOnInit();

      expect(component.posts$).toBeTruthy();

      expect(RequestServiceMock.get).toHaveBeenCalledWith({
        url: '/api/posts',
      });

      component.posts$.subscribe((data) => {
        expect(data).toMatchSnapshot();
      });

      component.postGroupedByKey$.subscribe((data) => {
        expect(data).toMatchSnapshot();
      });
    });
  });
});
