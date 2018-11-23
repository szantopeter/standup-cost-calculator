import { TestBed } from "@angular/core/testing";

import { SettingsService } from "./settings.service";
import { AppModule } from "../app.module";

describe("SettingsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule]
    }));

  it("should be created", () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
