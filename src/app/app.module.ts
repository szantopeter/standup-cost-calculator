import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HighchartsChartModule } from "highcharts-angular";
import { ChartComponent } from "./chart/chart.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [BrowserModule, HighchartsChartModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
