import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.scss"],
})
export class PrincipalComponent implements OnInit {
  public showFiller = false;
  public listItems: Array<any> = [];
  public menu: Array<any> = [
    {
      icon: "assets/images/home.png",
      text: "Inicio",
      selected: true,
    },
    {
      icon: "assets/images/hoja1.png",
      text: "Contratos",
      selected: false,
    },
    {
      icon: "assets/images/Tool.png",
      text: "Acciones",
      selected: false,
    },
    {
      icon: "assets/images/star.png",
      text: "Objetivos",
      selected: false,
    },
    {
      icon: "assets/images/money.png",
      text: "Herramientas",
      selected: false,
    },
    {
      icon: "assets/images/talk2.png",
      text: "Servicio al cliente",
      selected: false,
    },
  ];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._apiService.getItems().subscribe((response: any) => {
      this.listItems = response.listCard;
    });
  }
}
