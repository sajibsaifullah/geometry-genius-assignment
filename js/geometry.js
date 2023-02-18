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

// Parallelogram
/* document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const figureName = document.getElementById('fig-parallelogram').innerText;
    const firstData = document.getElementById('first-parallelogram-data').innerText;
    const secondData = document.getElementById('second-parallelogram-input').innerText;

    const firstDataValue = parseFloat(firstData);
    const secondDataValue = parseFloat(secondData);

    const area = (firstDataValue * secondDataValue).toFixed(2);

    setInCalculationById(serial, figureName, area);

}) */
// parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const inputData = getDataById('fig-parallelogram', 'first-parallelogram-data', 'second-parallelogram-data');

    const area = (parseFloat(inputData.firstData) * parseFloat(inputData.secondData)).toFixed(2);

    setInCalculationById(serial, inputData.figureName, area);
})

// rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    serial += 1;
    const inputData = getDataById('fig-rhombus', 'first-rhombus-data', 'second-rhombus-data');

    const area = (parseFloat(inputData.firstData) * parseFloat(inputData.secondData)).toFixed(2);

    setInCalculationById(serial, inputData.figureName, area);
})
// common get data function
function getDataById(figName, dataOne, dataTwo) {
    const figureName = document.getElementById(figName).innerText;
    const firstData = document.getElementById(dataOne).innerText;
    const secondData = document.getElementById(dataTwo).innerText;

    const inputData = {
        figureName: figureName,
        firstData: firstData,
        secondData: secondData
    }
    return inputData;
}

// common set function
function setInCalculationById(serialNo, figureName, area) {
    const parentContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serialNo}</td>
        <td>${figureName}</td>
        <td>${area}<small>cm<sup>2</sup></small></td>
        <td><button class="btn btn-primary"><small>Convert to m<sup>2</sup></small></button></td>
    `;
    parentContainer.appendChild(tr);
}