import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  numberOfParticipants = 10;
  timePerParticipant = 1.5;
  chart = Highcharts.Chart;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartOptions: Highcharts.Options = {
    title: {
      text: "Total cost of daily standup"
    },

    yAxis: {
      title: {
        text: "Time (minutes)"
      },
      crosshair: true,
      startOnTick: false,
      endOnTick: false
    },

    xAxis: {
      type: "linear",
      title: {
        text: "Number of paricipants"
      },
      crosshair: true,
      tickInterval: 1
    },

    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[3]],
            [
              1,
              Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba")
            ]
          ]
        },
        threshold: null
      }
    },

    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size: 10px">Number of participants : <b>{point.key}</b></span><br/>',
      valueSuffix: " minutes"
    },
    series: []
  };

  public refreshChart() {
    let i: number;
    const actualTime = [];
    const teamTime = [];

    for (i = 1; i <= this.numberOfParticipants; i++) {
      actualTime.push({ x: i, y: i * this.timePerParticipant });
      teamTime.push({ x: i, y: i * i * this.timePerParticipant });
    }

    const series = [
      {
        type: "area",
        name: "Man hour",
        data: teamTime
      },
      {
        name: "Actual time",
        data: actualTime
      }
    ];

    this.chartOptions.series = series;
    this.updateFlag = true;
  }

  updateFlag = false;
  oneToOneFlag = true;
  constructor() {}

  ngOnInit() {
    this.refreshChart();
  }
}
