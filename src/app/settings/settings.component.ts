import { Component, OnInit } from "@angular/core";
import { SettingsService, Settings } from "./settings.service";
import { TimeUnits } from "./time-units";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  constructor(public settingsService: SettingsService) {}

  settings: Settings;
  units = TimeUnits.values;

  ngOnInit() {
    this.settingsService.settings$.subscribe(settings => {
      this.settings = settings;
    });
  }

  modelChanged() {
    this.settingsService.updateSettings(this.settings);
  }
}
