it("should calculate the monthly rate correctly", function () {
  const values1 = { amount: 100000, years: 10, rate: 4 };
  const values2 = { amount: 250000, years: 30, rate: 3.25 };
  expect(calculateMonthlyPayment(values1)).toEqual("1012.45");
  expect(calculateMonthlyPayment(values2)).toEqual("1088.02");
});
it("should return a result with 2 decimal places", function () {
  const values1 = { amount: 8000, years: 12, rate: 5.5 };

  expect(calculateMonthlyPayment(values1)).toEqual("76.01");
});

/// etc
