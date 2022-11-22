describe("Testing helper functions", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should sum total tip amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(10);
    billAmtInput.value = 300;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
  });

  it("should sum the total bill amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);
    billAmtInput.value = 150;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(250);
  });

  it("should sum the total tip precent on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(10);
    billAmtInput.value = 100;
    tipAmtInput.value = 30;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should calculate the tip amount", function () {
    expect(calculateTipPercent(100, 12)).toEqual(12);
    expect(calculateTipPercent(120, 0)).toEqual(0);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
