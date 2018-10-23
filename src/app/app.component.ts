import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  numberOfParticipants = 10;
  timePerParticipant = 1.5;
  yUnit = "minute";
  maxTeamSize = 5;

  units = [
    { value: "minute", name: "Minute" },
    { value: "man-day", name: "Man day" }
  ];
}
