import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HighchartsChartModule } from "highcharts-angular";
import { ChartComponent } from "./chart/chart.component";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatSlideToggleModule,
  MatRippleModule,
  MatIcon,
  MatButtonToggle,
  MatButtonToggleGroup,
  MatSliderModule,
  MatInputModule
} from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    MatIcon,
    MatButtonToggle,
    MatButtonToggleGroup,
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
