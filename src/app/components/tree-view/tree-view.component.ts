import { Component, Input } from '@angular/core';

import { TreeData } from '@models';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent {
  @Input() public data: TreeData[];
}
