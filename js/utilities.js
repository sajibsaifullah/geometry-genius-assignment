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
        <td id="area-value">${area}<small>cm<sup>2</sup></small></td>
        <td id="btn-convert"><button class="btn btn-primary"><small>Convert to m<sup>2</sup></small></button></td>
    `;
    parentContainer.appendChild(tr);

    document.getElementById('btn-convert').addEventListener('click', function () {
        const areaValue = document.getElementById('area-value');
        const areaValueString = areaValue.innerText;
        const convertToSquareMeter = parseFloat(parseFloat(areaValueString) / (100 * 100));
        areaValue.innerText = convertToSquareMeter;
    })
}
