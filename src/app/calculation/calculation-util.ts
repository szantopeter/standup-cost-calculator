import { TimeUnits } from "../settings/time-units";

export default class CalculationUtil {
  static standupsTotalCost(
    numberOfParticipants: number,
    maxTeamSize: number,
    timePerParticipant: number,
    yDenominator: number
  ): number {
    let sumTime = 0;
    const teamSizes = CalculationUtil.calculateTeamSizes(
      numberOfParticipants,
      maxTeamSize
    );
    for (let teamSize of teamSizes) {
      sumTime += CalculationUtil.standupTotalCost(
        teamSize,
        timePerParticipant,
        yDenominator
      );
    }
    return sumTime;
  }

  static calculateTeamSizes(teamSize: number, maxTeamSize: number): number[] {
    if (maxTeamSize > teamSize) {
      return [teamSize];
    }

    let teamSizes: number[] = [];

    let fullTeams = Math.trunc(teamSize / maxTeamSize);
    let lastTeamSize = teamSize % maxTeamSize;

    for (let i = 0; i < fullTeams - 1; i++) {
      teamSizes.push(maxTeamSize);
    }

    if (lastTeamSize == 1) {
      teamSizes.push(maxTeamSize - 1);
      teamSizes.push(2);
    } else {
      teamSizes.push(maxTeamSize);
      if (lastTeamSize !== 0) {
        teamSizes.push(lastTeamSize);
      }
    }

    return teamSizes;
  }

  static standupTotalCost(
    numberOfParticipants: number,
    timePerParticipant: number,
    yDenominator: number
  ): number {
    const costOfOnePersonToSpeak = numberOfParticipants * timePerParticipant;
    return (numberOfParticipants * costOfOnePersonToSpeak) / yDenominator;
  }

  static toTimeUnit(
    yUnit: string
  ): {
    yDenominator: number;
    yUnitText: string;
    valueDecimals: number;
  } {
    if (yUnit === "man-day") {
      return {
        yDenominator: 8 * 60,
        yUnitText: TimeUnits.values[yUnit],
        valueDecimals: 2
      };
    } else {
      return {
        yDenominator: 1,
        yUnitText: TimeUnits.values[yUnit],
        valueDecimals: 0
      };
    }
  }
}
