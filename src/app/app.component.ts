import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '@models';
import { RequestService } from '@services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'nitro-test';
  public posts$: Observable<any>;

  constructor(private req: RequestService) {}

  public ngOnInit() {
    this.posts$ = this.req
      .get<Post[]>({ url: '/api/posts' })
      .pipe(map(({ data }) => data));
  }
}
