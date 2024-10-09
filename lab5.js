const main = document.getElementById("main")
const openpopup1 = document.getElementById("openpopup1");
const popup1 = document.getElementById("popup1");
const closepopup1 = document.getElementById("closepopup1");

const openpopup2 = document.getElementById("openpopup2");
const popup2 = document.getElementById("popup2");
const closepopup2 = document.getElementById("closepopup2");

const openpopup3 = document.getElementById("openpopup3");
const popup3 = document.getElementById("popup3");
const closepopup3 = document.getElementById("closepopup3");

openpopup1.onclick = function(){
    popup1.style.display = "block";
    main.classList.add('overlay');
}

closepopup1.onclick = function(){
    popup1.style.display = "none";
    main.classList.remove('overlay');
}

openpopup2.onclick = function(){
    popup2.style.display = "block";
    main.classList.add('overlay');
}

closepopup2.onclick = function(){
    popup2.style.display = "none";
    main.classList.remove('overlay');
}

openpopup3.onclick = function(){
    popup3.style.display = "block";
    main.classList.add('overlay');
}

closepopup3.onclick = function(){
    popup3.style.display = "none";
    main.classList.remove('overlay');
}