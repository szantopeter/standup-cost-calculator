import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

export interface Settings {
  numberOfParticipants: number;
  timePerParticipant: number;
  yUnit: string;
  maxTeamSize: number;
}

const DefaultSettings = {
  numberOfParticipants: 10,
  timePerParticipant: 1.5,
  yUnit: "minute",
  maxTeamSize: 5
};

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  private settingsSubject = new BehaviorSubject<Settings>(DefaultSettings);

  public settings$ = this.settingsSubject.asObservable();

  constructor(private route: ActivatedRoute, private router: Router) {
    
    this.route.queryParamMap.subscribe(params => {
      this.updateSettings({
        numberOfParticipants:
          +params.get("numberOfParticipants") ||
          DefaultSettings.numberOfParticipants,
        timePerParticipant:
          +params.get("timePerParticipant") ||
          DefaultSettings.timePerParticipant,
        yUnit: params.get("timeUnit") || DefaultSettings.yUnit,
        maxTeamSize: +params.get("maxTeamSize") || DefaultSettings.maxTeamSize
      });
    });
    
  }

  updateSettings(settings: Settings) {
    this.settingsSubject.next(settings);
    this.router.navigate([], {
      queryParams: {
        numberOfParticipants: settings.numberOfParticipants,
        timePerParticipant: settings.timePerParticipant,
        timeUnit: settings.yUnit,
        maxTeamSize: settings.maxTeamSize
      },
      replaceUrl: true
    });
  }
}
