import { Component, Input } from '@angular/core';

import { ParsedPost } from '@models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() public post: ParsedPost;
}
