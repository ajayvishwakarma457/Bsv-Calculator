const marketTherapyTotalCostFirstColumn = (total) => {
    $('#txt7').val(total);
};

const marketTherapyTotalCostSecondColumn = (total) => {
    $('#txt8').val(total);
};

const marketTherapyTotalCostThirdColumn = (total) => {
    $('#txt9').val(total);
    const result = ((+$('#txt9').val() - +$('#txt15').val()));
    savingPatientsThreeCoumn(result.toFixed(2));
};

const marketTherapyTotalCostFourColumn = (total) => {
    $('#txt10').val(total);
    bsvWithUFourColumn();
};

const thymogampapOneColumn = (total) => {
    $('#txt11').val(total);
};

const thymogampapTwoColumn = (total) => {
    $('#txt12').val(total);
};

const bsvWithUOneColumn = (total) => {
    $('#txt13').val(total);
};

const bsvWithUTwoColumn = (total) => {
    $('#txt14').val(total);
};

const bsvWithUThreeColumn = () => {
    const result = +$('#revugamval2').text() + +$('#oncycloval3').text();
    $('#txt15').val(result.toFixed(2));
};

const bsvWithUFourColumn = () => {
    $('#txt16').val(+$('#oncycloval4').text());
    const result = ((+$('#txt10').val() - +$('#txt16').val()));
    savingPatientsFourCoumn(result);
};

const savingPatientsOneCoumn = (total) => {
    $('#txt17').val(total);
};

const savingPatientsTwoCoumn = (total) => {
    $('#txt18').val(total);
};

const savingPatientsThreeCoumn = (total) => {
    $('#txt19').val(total);
};

const savingPatientsFourCoumn = (total) => {
    $('#txt20').val(total.toFixed(2));
};

$("#txt1").on("input", function () {
    marketTherapyTotalCostFirstColumn((+$(this).val()) + (+$('#thymocostval1').text()) + +$('#txt3').val());
});

$("#txt2").on("input", function () {
    marketTherapyTotalCostThirdColumn((+$(this).val()) + +$('#txt5').val());
    bsvWithUThreeColumn();
});


$("#txt3").on("input", function () {
    marketTherapyTotalCostFirstColumn((+$(this).val()) + (+$('#thymocostval1').text()) + +$('#txt1').val());
});

$("#txt4").on("input", function () {
    marketTherapyTotalCostSecondColumn((+$(this).val()) + (+$('#thymocostval2').text()));
});

$("#txt5").on("input", function () {
    marketTherapyTotalCostThirdColumn((+$(this).val()) + +$('#txt2').val());
    bsvWithUThreeColumn();
});

$("#txt6").on("input", function () {
    marketTherapyTotalCostFourColumn((+$(this).val()));
});

$("#comboBox1").change(function () {
    const $thisVal = +$(this).val();
    thymogampapOneColumn(+$('#thymocostval1').text() - ((+$('#thymocostval1').text() * $thisVal) / 100));
    //debugger;
    bsvWithUOneColumn((+$('#txt11').val() + +$('#revugamval1').text() + +$('#oncycloval1').text()).toFixed(2));

    if (+$('#txt7').val() > 0) {
        savingPatientsOneCoumn(((+$('#txt7').val() - +$('#txt13').val())).toFixed(2));
    }
});

$("#comboBox2").change(function () {
    const $thisVal = +$(this).val();
    thymogampapTwoColumn(+$('#thymocostval2').text() - ((+$('#thymocostval2').text() * $thisVal) / 100));

    bsvWithUTwoColumn((+$('#txt12').val() + +$('#oncycloval2').text()).toFixed(2));

    if (+$('#txt8').val() > 0) {
        savingPatientsTwoCoumn((+$('#txt8').val() - +$('#txt14').val()).toFixed(2));
    }
});

$('#refresh-btn').on('click', () => {
    for (let i = 1; i <= 20; i++) {
        document.getElementById(`txt${i}`).value = '';
    }
});

