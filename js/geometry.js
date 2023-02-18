let serial = 0;

// for triangle
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial += 1;
    const figureName = document.getElementById('fig-triangle').innerText;
    const firstInputField = document.getElementById('first-triangle-input').value;
    const secondInputField = document.getElementById('second-triangle-input').value;

    const firstInputFieldValue = parseFloat(firstInputField);
    const secondInputFieldValue = parseFloat(secondInputField);

    const area = (0.5 * firstInputFieldValue * secondInputFieldValue).toFixed(2);

    // input validation
    if (isNaN(firstInputFieldValue) == true || firstInputFieldValue <= 0) {
        return alert('Please input valid data');
    }
    if (isNaN(secondInputFieldValue) == true || secondInputFieldValue <= 0) {
        return alert('Please input valid data');
    }

    // set
    setInCalculationById(serial, figureName, area);
})

// for rectangle
document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial += 1;
    const figureName = document.getElementById('fig-rectangle').innerText;
    const firstInputField = document.getElementById('first-rectangle-input').value;
    const secondInputField = document.getElementById('second-rectangle-input').value;

    const firstInputFieldValue = parseFloat(firstInputField);
    const secondInputFieldValue = parseFloat(secondInputField);

    const area = (firstInputFieldValue * secondInputFieldValue).toFixed(2);

    // input validation
    if (isNaN(firstInputFieldValue) == true || firstInputFieldValue <= 0) {
        return alert('Please input valid data');
    }
    if (isNaN(secondInputFieldValue) == true || secondInputFieldValue <= 0) {
        return alert('Please input valid data');
    }

    // set
    setInCalculationById(serial, figureName, area);
})

//for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const inputData = getDataById('fig-parallelogram', 'first-parallelogram-data', 'second-parallelogram-data');

    const area = (parseFloat(inputData.firstData) * parseFloat(inputData.secondData)).toFixed(2);

    setInCalculationById(serial, inputData.figureName, area);
})

// for rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    serial += 1;
    const inputData = getDataById('fig-rhombus', 'first-rhombus-data', 'second-rhombus-data');

    const area = (0.5 * parseFloat(inputData.firstData) * parseFloat(inputData.secondData)).toFixed(2);

    setInCalculationById(serial, inputData.figureName, area);
})

// for pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    serial += 1;
    const inputData = getDataById('fig-pentagon', 'first-pentagon-data', 'second-pentagon-data');

    const area = (0.5 * parseFloat(inputData.firstData) * parseFloat(inputData.secondData)).toFixed(2);

    setInCalculationById(serial, inputData.figureName, area);
})

// for ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const inputData = getDataById('fig-ellipse', 'first-ellipse-data', 'second-ellipse-data');

    const area = (3.14 * parseFloat(inputData.firstData) * parseFloat(inputData.secondData)).toFixed(2);

    setInCalculationById(serial, inputData.figureName, area);
})
