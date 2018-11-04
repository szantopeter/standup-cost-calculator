import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  numberOfParticipants = 10;
  timePerParticipant = 1.5;
  yUnit = "minute";
  maxTeamSize = 5;

  units = [
    { value: "minute", name: "Minute" },
    { value: "man-day", name: "Man day" }
  ];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.numberOfParticipants = +params.get("numberOfParticipants") || 10;
      this.timePerParticipant = +params.get("timePerParticipant") || 1.5;
      this.yUnit = params.get("timeUnit") || "minute";
      this.maxTeamSize = +params.get("maxTeamSize") || 5;
    });
  }

  updateURI() {
    this.router.navigate([], {
      queryParams: {
        numberOfParticipants: this.numberOfParticipants,
        timePerParticipant: this.timePerParticipant,
        timeUnit: this.yUnit,
        maxTeamSize: this.maxTeamSize
      },
      replaceUrl: true
    });
  }
}
