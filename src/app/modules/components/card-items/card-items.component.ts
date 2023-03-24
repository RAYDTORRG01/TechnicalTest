import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss']
})
export class CardItemsComponent {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }
}
