import { Component, OnInit } from "@angular/core";
import CalculationUtil from "../calculation/calculation-util";
import { SettingsService, Settings } from "../settings/settings.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  singleTotalCost: number;
  multipleTotalCost: number;
  numberOfTeams: number;
  settings : Settings;
  timeUnitName: string;

  constructor(public settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.settings$.subscribe(settings => {
      this.settings = settings;
      this.refreshChart();
    })
  }

  public refreshChart() {
    const timeUnit = CalculationUtil.toTimeUnit(this.settings.yUnit);
    this.timeUnitName = timeUnit.yUnitText.toLowerCase();

    this.singleTotalCost = CalculationUtil.standupsTotalCost(
      this.settings.numberOfParticipants,
      this.settings.numberOfParticipants,
      this.settings.timePerParticipant,
      timeUnit.yDenominator
    );

    this.multipleTotalCost = CalculationUtil.standupsTotalCost(
      this.settings.numberOfParticipants,
      this.settings.maxTeamSize,
      this.settings.timePerParticipant,
      timeUnit.yDenominator
    );

    this.numberOfTeams = CalculationUtil.calculateTeamSizes(
      this.settings.numberOfParticipants,
      this.settings.maxTeamSize
    ).length;
  }

}
