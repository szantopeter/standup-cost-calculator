import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import * as Highcharts from "highcharts";
import CalculationUtil from "./calculation-util";
import { stringify } from "@angular/core/src/render3/util";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  @Input()
  numberOfParticipants;
  @Input()
  timePerParticipant;
  @Input()
  yUnit;
  @Input()
  maxTeamSize;

  chart = Highcharts.Chart;
  Highcharts = Highcharts;

  chartConstructor = "chart";
  chartOptions: Highcharts.Options = {
    colors: [
      "#058DC7",
      "#ED561B",
      "#50B432",
      "#DDDF00",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4"
    ],

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
    const increment = [];

    let yDenominator: number;
    let yUnitText: string;

    if (this.yUnit === "man-day") {
      yDenominator = 8 * 60;
      yUnitText = "Man day";
      this.chartOptions.tooltip.valueDecimals = 2;
    } else {
      yDenominator = 1;
      yUnitText = "Minutes";
      this.chartOptions.tooltip.valueDecimals = 0;
    }

    let title: string;
    if (this.numberOfParticipants <= this.maxTeamSize) {
      title = "All participants in one standup";
    } else {
      title = `Multiple standups with maximum ${this.maxTeamSize} person each`;
    }

    this.chartOptions.title = { text: title };

    this.chartOptions.yAxis.title.text = `Time (${yUnitText})`;
    this.chartOptions.tooltip.valueSuffix = ` ${yUnitText}`;

    this.chartOptions.yAxis.max = CalculationUtil.standupsTotalCost(
      this.numberOfParticipants,
      this.numberOfParticipants,
      this.timePerParticipant,
      yDenominator
    );

    let lastTotalCost = 0;
    for (i = 2; i <= this.numberOfParticipants; i++) {
      actualTime.push({
        x: i,
        y: (i * this.timePerParticipant) / yDenominator
      });
      const totalCost = CalculationUtil.standupsTotalCost(
        i,
        this.maxTeamSize,
        this.timePerParticipant,
        yDenominator
      );
      teamTime.push({
        x: i,
        y: totalCost
      });

      if (lastTotalCost != 0) {
        increment.push({
          x: i,
          y: totalCost - lastTotalCost
        });
      }

      lastTotalCost = totalCost;
    }

    const series = [
      {
        type: "area",
        name: "Total time",
        data: teamTime
      },
      {
        name: "Total time growth by one more participant",
        type: "column",
        //color: "red",
        data: increment
      },
      {
        name: "Actual time",
        //color: "green",
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

  ngOnChanges(changes: SimpleChanges) {
    this.refreshChart();
  }
}
