function addData(){
    var di = document.createElement("tr");
    di.innerHTML = `
    <td>${document.querySelector("#first").value}</td>
    <td>${document.querySelector("#last").value}</td>
    <td>${document.querySelector("#address").value}</td>
    <td>${document.querySelector("#pincode").value}</td>
    <td>${document.querySelector("#gender").value}</td>
    <td>${document.querySelector("#choice").value}</td>
    <td>${document.querySelector("#state").value}</td>
    <td>${document.querySelector("#country").value}</td>
    `;
    document.querySelector("#result").appendChild(di);
}   