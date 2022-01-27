import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("should return formatted string displaying the date with month and year ", () => {
    expect(formatDate("2009-11-10T07:00:00+0000")).toBe("10 Nov, 2009");
  });

  it.each(["", "dkfjskdf", "2014-35-30"])(
    "should return empty string if input is not a valid date string",
    (input) => {
      expect(formatDate(input)).toBe(null);
    }
  );
});
