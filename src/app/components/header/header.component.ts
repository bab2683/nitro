import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public groupingChoices: string[];
  @Input() public active: string;
  @Output() public selected: EventEmitter<string> = new EventEmitter();
}
