import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import CalculationUtil from "../calculation/calculation-util";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  @Input()
  numberOfParticipants;
  @Input()
  timePerParticipant;
  @Input()
  yUnit;
  @Input()
  maxTeamSize;

  singleTotalCost: number;
  multipleTotalCost: number;

  constructor() {}

  ngOnInit() {}

  public refreshChart() {
    const timeUnit = CalculationUtil.toTimeUnit(this.yUnit);

    this.singleTotalCost = CalculationUtil.standupsTotalCost(
      this.numberOfParticipants,
      this.numberOfParticipants,
      this.timePerParticipant,
      timeUnit.yDenominator
    );

    this.multipleTotalCost = CalculationUtil.standupsTotalCost(
      this.numberOfParticipants,
      this.maxTeamSize,
      this.timePerParticipant,
      timeUnit.yDenominator
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.refreshChart();
  }
}
