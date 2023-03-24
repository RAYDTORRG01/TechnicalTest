import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public showText: boolean = false;
  @Output() buttonMenuEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  menuButton() {
    this.buttonMenuEvent.emit();
  }
}
