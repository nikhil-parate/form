function addData(){
    var data,data1,data2,data3,data4,data5;
    if (document.getElementById('female').checked) {
        data = document.getElementById('female').value;
      }
    else{
        data = document.getElementById('male').value;
      }
    if(document.getElementById('Dhokla').checked)  {
        data1 = document.getElementById('Dhokla').value;
    }
    else {
        data1 = "";
    }
    if(document.getElementById('Idli').checked){
        data2 = document.getElementById('Idli').value;
    }
    else {
        data2 = "";
    }
    if(document.getElementById('Dosa').checked) {
        data3 = document.getElementById('Dosa').value;
    }
    else{
        data3 = "";
    }
    if(document.getElementById('Samosa').checked) {
        data4 = document.getElementById('Samosa').value;
    }
    else{
        data4 ="";
    }
    if(document.getElementById('Poha').checked) {
        data5 = document.getElementById('Poha').value; 
    }
    else{
        data5 ="";
    }
    var di = document.createElement("tr");
    di.innerHTML = `
    <td>${document.querySelector("#first").value}</td>
    <td>${document.querySelector("#last").value}</td>
    <td>${document.querySelector("#address").value}</td>
    <td>${document.querySelector("#pincode").value}</td>
    <td>${data}</td>
    <td>${data1}</td>
    <td>${data2}</td>
    <td>${data3}</td>
    <td>${data4}</td>
    <td>${data5}</td>
    <td>${document.querySelector("#state").value}</td>
    <td>${document.querySelector("#country").value}</td>
    `;
    document.querySelector("#result").appendChild(di);
}   
