let btn = document.getElementById("createbtn");

var arr = [];

function create() {
    let str = "";

    let tblBody = document.getElementById("tblBody");
    let noteName = document.getElementById("input1").value;
    let contentText = document.getElementById("textarea1").value;

    // if (localStorage.getItem('dataJson') == null) {
    //     arr.push([noteName, contentText]);
    //     localStorage.setItem('dataJson', JSON.stringify(arr));
    // }
    // else {
    //     jsonArrString = localStorage.getItem('dataJson');
    //     arr = JSON.parse(jsonArrString);
    //     arr.push([noteName, contentText]);
    //     localStorage.setItem('dataJson', JSON.stringify(arr));
    // }
    if(noteName === "" || contentText === "" || /\d/.test(noteName))
        alert("Please enter required fields!!!");
    else
        arr.push([noteName, contentText]);

    arr.forEach((element, index) => {
        str += `<tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-primary" onclick="del(${index})">Delete</button></td>
        </tr>`;
    });
    tblBody.innerHTML = str;
}

function refresh()
{
    let str = "";
    let tblBody = document.getElementById("tblBody");
    arr.forEach((element, index) => {
        str += `<tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-primary" onclick="del(${index})">Delete</button></td>
        </tr>`;
    });
    tblBody.innerHTML = str;
}

function del(index)
{
    console.log("delete called");
    arr.splice(index, 1);
    refresh();
}

btn.addEventListener('click', create);