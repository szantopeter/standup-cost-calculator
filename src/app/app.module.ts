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
  MatSliderModule,
  MatRadioModule,
  MatInputModule,
  MatGridListModule
} from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, ChartComponent, FooterComponent],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
