import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center-text',
  templateUrl: './center-text.component.html',
  styleUrls: ['./center-text.component.scss']
})
export class CenterTextComponent {
  @Input() value: string = "";

  constructor() {}

  ngOnInit(): void {}
}
