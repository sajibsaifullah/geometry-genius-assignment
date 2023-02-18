let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial += 1;
    const figureName = document.getElementById('fig-triangle').innerText;
    const firstInputField = document.getElementById('first-triangle-input').value;
    const secondInputField = document.getElementById('second-triangle-input').value;

    const firstInputFieldValue = parseFloat(firstInputField);
    const secondInputFieldValue = parseFloat(secondInputField);

    const area = 0.5 * firstInputFieldValue * secondInputFieldValue;

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

// set function
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