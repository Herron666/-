let Z = [];
showZ();

function rowTemlate(index, task){
    return ` 
        <td> ${index}</td> 
        <td> ${task} </td> 
        <td> 
            <input type="button" value="Вилучити" onclick="removeTask('${task}')">                  
        </td>`;
}

function showZ(){
    let list ="<tr> <th> Номер</th> <th> Завдання </th> <th>Дії</th></tr>";
    for (let i=0; i<Z.length; i++){
        list += `<tr> 
                    ${rowTemlate(i+1, Z[i])}
                </tr>`;
    }
    document.getElementById("task2").innerHTML = list;
}

function addTask(){
    const newTask = document.getElementById("newtask").value;
    Z.push(newTask);
    let row = document.createElement("tr");
    row.innerHTML = rowTemlate(Z.length, newTask);
    document.getElementById("task2").children[0].appendChild(row);
}

function removeTask(task){
    const index = Z.indexOf(task);
    Z.splice(index, 1);
    let tbody = document.getElementById("task2").children[0];
    let rowToRemove = tbody.children[index+1];
    rowToRemove.remove();
}