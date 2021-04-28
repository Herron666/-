let sum = 0;

function addinput() {
    let output = document.getElementById("output");
    let number = parseInt(document.getElementById("number").value);
    let list = "";
    for (let i = 0; i<number; i++) {
        list += `<tr><td>Оцінка ${i+1} <input type="number" id="number${i}" min="1" max="12"></td></tr>`;
    } 
    output.innerHTML = list;
}

function averageMark() {
    let result = document.getElementById("result");
    let number = parseInt(document.getElementById("number").value);
    for (let i = 0; i<number; i++) {
        let k = "number" + i;
        let rating = parseInt(document.getElementById(k).value);
        if (rating >= 1 && rating <= 12) {
            sum += rating;
        }
    } 
    result.innerText = `Середній бал = ${sum / number}`;
    sum = 0;
}

function clearall() {
    document.getElementById("number").value = "";
    output.innerText = "";
    result.innerText = "";
    sum = 0;
}    