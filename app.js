function run() {
    document.getElementById("paragraph").innerHTML = "Hello fans";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("paragraph").style.padding = "20px";
    randomNun();
    userNumber();
}

function randomNun() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "green";
    x.style.color = "blue";
    x.style.textAlign = "center";
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    alert(user)
}