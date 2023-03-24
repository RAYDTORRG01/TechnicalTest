import { CenterTextComponent } from './components/center-text/center-text.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrincipalComponent } from "./components/principal/principal.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";
import { HomeRoutingModule } from "./home-routing.module";
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from "../Presenter/footer/footer.component";
import { HeaderComponent } from "../Presenter/header/header.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatStepperModule } from "@angular/material/stepper";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatChipsModule } from "@angular/material/chips";
import { MatBadgeModule } from "@angular/material/badge";
import { FlexModule } from "@angular/flex-layout";
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardItemsComponent } from './components/card-items/card-items.component';
import { TopTextComponent } from './components/top-text/top-text.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ListItemsComponent,
    FooterComponent,
    HeaderComponent,
    CardContentComponent,
    CardItemsComponent,
    CenterTextComponent,
    TopTextComponent
  ],
  imports: [CommonModule, 
    FlexModule,
    HomeRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatStepperModule,
    MatMenuModule,
    MatRadioModule,
    MatChipsModule,
    MatBadgeModule,],
})
export class HomeModule {}