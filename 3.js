let Z = [];
showZ();

let sum = 0;

function rowTemlate(index, task,task_1,task_2){
    return ` 
        <td> ${index}</td> 
        <td> ${task} </td> 
        <td> ${task_1} </td>
        <td> ${task_2} </td>
        <td> 
            <input type="button" value="Вилучити" onclick="removeTask('${task_2}')">                  
        </td>`;
}

function showZ(){
    let list ="<tr> <th> № </th> <th> ПІБ </th> <th>Посада</th><th>Заробітна плата</th></tr>";
    for (let i=0; i<Z.length; i++){
        list += `<tr> 
                    ${rowTemlate(i+1, Z[i])}
                </tr>`;
    }
    document.getElementById("task2").innerHTML = list;
}
let u = 0
function addTask(){
    u += 1
    const newTask = document.getElementById("newtask").value;
    const newTask1 = document.getElementById("newtask1").value;
    let newTask2 = parseInt(document.getElementById("newtask2").value);
    if (newTask2 > 3000) {
        sum += newTask2;
    }
    Z.push(newTask,newTask1,newTask2);
    let row = document.createElement("tr");
    row.innerHTML = rowTemlate(u, newTask, newTask1, newTask2);
    document.getElementById("task2").children[0].appendChild(row);
}
function removeTask(task){
    const index = Z.indexOf(task);
    Z.splice(index, 1);
    let tbody = document.getElementById("task2").children[0];
    let rowToRemove = tbody.children[index+1];
    rowToRemove.remove();
}
function Task(task_2){
    let res = document.getElementById("output");
    res.innerText =`Сумарна заробітна плата працівників, у яких вона більша за 3000 = ${sum}`;
}