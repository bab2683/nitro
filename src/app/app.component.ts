import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ParsedPost, Post, TreeData } from '@models';
import { RequestService } from '@services';
import { createSummary, dateDataFromString } from '@utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'nitro-test';
  public groupingChoices: string[] = ['weekNumber', 'author', 'location'];
  public keyToGroupPosts$: BehaviorSubject<string> = new BehaviorSubject(
    this.groupingChoices[0]
  );
  public posts$: Observable<ParsedPost[]>;
  public treeData$: Observable<TreeData<ParsedPost[]>[]>;

  constructor(private req: RequestService) {}

  public get activeChoice() {
    return this.keyToGroupPosts$.getValue();
  }

  public set activeChoice(value: string) {
    this.keyToGroupPosts$.next(value);
  }

  public ngOnInit() {
    this.posts$ = this.req
      .get<Post[]>({ url: '/api/posts' })
      .pipe(
        map(({ data }) => data),
        map((posts) =>
          posts.map((post) => ({
            ...post,
            ...dateDataFromString(post.time),
            summary: createSummary(post.text, 4),
            open: false,
          }))
        )
      );

    this.treeData$ = combineLatest(this.keyToGroupPosts$, this.posts$).pipe(
      map(([key, posts]) =>
        posts.reduce((result, current) => {
          const objKey: string = `${key}: ${current[key]}`;

          if (result[objKey]) {
            result[objKey].push(this.postToTreeElement(current));
          } else {
            result[objKey] = [this.postToTreeElement(current)];
          }
          return result;
        }, {})
      ),
      map((groupedPosts) =>
        Object.keys(groupedPosts).reduce(
          (result, current) =>
            result.concat([{ title: current, items: groupedPosts[current] }]),
          []
        )
      ),
      map((groupedPosts) => [
        {
          title: 'Posts',
          items: groupedPosts,
        },
      ])
    );
  }

  private postToTreeElement(post: ParsedPost): TreeData<any, ParsedPost> {
    return {
      title: post.summary,
      content: post,
    };
  }
}
