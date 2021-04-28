let sum = 0;

function addFields() {
    let output = document.getElementById("output");
    let number = parseInt(document.getElementById("number").value);
    let list = "";
    for (let i = 0; i<number; i++) {
        list += `<tr><td>Тиждень ${i+1}</td></tr>`;
        list += `<tr><td>Понеділок <input type="number" id="Monday${i}">грн; </td><td>Вівторок <input type="number" id="Tuesday${i}">грн; </td>
        <td>Середа <input type="number" id="Wednesday${i}">грн; </td><td>Четверг <input type="number" id="Thursday${i}">грн; </td>
        <td>П'ятниця <input type="number" id="Friday${i}">грн; </td></tr>`;
    } 
    output.innerHTML = list;
}

function totalRevenue() {
    let result = document.getElementById("result");
    let number = parseInt(document.getElementById("number").value);
    for (let i = 0; i<number; i++) {
        sum += parseInt(document.getElementById("Monday" + i).value);
        sum += parseInt(document.getElementById("Tuesday" + i).value);
        sum += parseInt(document.getElementById("Wednesday" + i).value);
        sum += parseInt(document.getElementById("Thursday" + i).value);
        sum += parseInt(document.getElementById("Friday" + i).value);
    } 
    result.innerText = `Cумарна виручка за ${number} тижні = ${sum} грн`;
    sum = 0;
}

function clearall() {
    document.getElementById("number").value = "";
    output.innerText = "";
    result.innerText = "";
    sum = 0;
}  