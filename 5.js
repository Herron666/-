let sum=0;
function input(){
 let num=parseInt(document.getElementById("number").value);
 let res="";
 for(let i=0;i<num;i++){
     res+=`<tr><td>Квиток ${i+1}
     <input type="button" value="Купе" onclick="kupe()">
     <input type="button" value="Загальний" onclick="general()">
     <input type="button" value="Плацкарт" onclick="p()">
     <td><tr>`;
 }
 document.getElementById("output").innerHTML=res;
}
function kupe(){
    sum+=150;
    document.getElementById("result").innerText=`${sum}`;
}
function general(){
    sum+=100;
    document.getElementById("result").innerText=`${sum}`;
}
function p(){
    sum+=50;
    document.getElementById("result").innerText=`${sum}`;
}