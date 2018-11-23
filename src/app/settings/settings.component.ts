import { Component, OnInit } from "@angular/core";
import { SettingsService, Settings } from "./settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  constructor(public settingsService: SettingsService) {}

  settings: Settings;

  units = [
    { value: "minute", name: "Minute" },
    { value: "man-day", name: "Man day" }
  ];

  ngOnInit() {
    this.settingsService.onInit();

    this.settingsService.settings$.subscribe(settings => {
      this.settings = settings;
    });
  }

  modelChanged() {
    this.settingsService.updateSettings(this.settings);
  }
}
