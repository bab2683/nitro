import { Component, Input } from '@angular/core';

import { TreeData } from '@models';

@Component({
  selector: 'app-tree-button',
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.scss'],
})
export class TreeButtonComponent {
  @Input() public data: TreeData;
  public open: boolean = false;
}
