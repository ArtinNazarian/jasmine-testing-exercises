describe("Testing the Payment.js file", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  });

  it("should add a new line of payment using submitPaymentInfo", function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("100");
    expect(allPayments["payment1"].tipAmt).toEqual("10");
    expect(allPayments["payment1"].tipPercent).toEqual(10);
  });

  it("should not add a new payment with empty input", function () {
    billAmtInput.value = "";
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should update payment table on appendPaymentTable()", function () {
    let currentPayment = createCurPayment();
    allPayments["payment1"] = currentPayment;

    appendPaymentTable(currentPayment);

    let currentTdList = document.querySelectorAll("#paymentTable tbody tr td");
    let curTdListArray = Array.from(currentTdList);
    expect(curTdListArray.length).toEqual(3);

    expect(curTdListArray[0].innerText).toEqual("$100");
    expect(curTdListArray[1].innerText).toEqual("$10");
    expect(curTdListArray[2].innerText).toEqual("10%");
  });

  it("should create a new payment using createCurPayment()", function () {
    let payment = {
      billAmt: "100",
      tipAmt: "10",
      tipPercent: 10,
    };
    expect(createCurPayment()).toEqual(payment);
  });

  it("should not create payment with empty input values for createCurPayment()", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
