import CalculationUtil from "./calculation-util";

describe("CalculationUtil", () => {
  it("calculateTeamSize(9,30)", () => {
    expect(CalculationUtil.calculateTeamSizes(9, 30)).toEqual([9]);
  });

  it("calculateTeamSize(9,3)", () => {
    expect(CalculationUtil.calculateTeamSizes(9, 3)).toEqual([3, 3, 3]);
  });

  it("calculateTeamSize(10,3)", () => {
    expect(CalculationUtil.calculateTeamSizes(10, 3)).toEqual([3, 3, 2, 2]);
  });

  it("calculateTeamSize(4,3)", () => {
    expect(CalculationUtil.calculateTeamSizes(4, 3)).toEqual([2, 2]);
  });

  it("calculateTeamSize(5,3)", () => {
    expect(CalculationUtil.calculateTeamSizes(5, 3)).toEqual([3, 2]);
  });

  it("standupTotalCost(2,2)", () => {
    expect(CalculationUtil.standupTotalCost(2, 2, 1)).toEqual(8);
  });

  it("standupTotalCost(3,2)", () => {
    expect(CalculationUtil.standupTotalCost(3, 2, 1)).toEqual(18);
  });

  it("sumStandups participants 5 max 3", () => {
    expect(CalculationUtil.standupsTotalCost(5, 3, 1, 1)).toEqual(13);
  });

  it("sumStandups participants 5 max 5", () => {
    expect(CalculationUtil.standupsTotalCost(5, 5, 1, 1)).toEqual(25);
  });

  it("sumStandups participants 5 max 50", () => {
    expect(CalculationUtil.standupsTotalCost(5, 50, 1, 1)).toEqual(25);
  });
});
