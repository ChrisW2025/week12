function run() {
    document.getElementById("paragraph").innerHTML = "Hello fans";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("paragraph").style.padding = "20px";
    randomNun();
    userNumber();
    compareNumbers();
}

function randomNun() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "green";
    x.style.color = "blue";
    x.style.textAlign = "center";
    return ran
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "orange";
    y.style.padding = "20px";
    y.style.textalign = "center";
    return user
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNun();
    let z = document.getElementById("compare");


    if (a!= b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "red";
        z.style.padding = "20px";
        z.style.textalign = "center";
     } else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "green";
        z.style.padding = "20px";
        z.style.textalign = "center";
     }
}