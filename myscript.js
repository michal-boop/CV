const work = document.getElementById("work_btn");
const workPage = document.getElementById("work");

let onWorkFunction = function () {
    let hiddenWork = document.getElementById("work");
    hiddenWork.style.width = "100%";
    hiddenWork.style.display = "block";
};

let offWorkFunction = function () {
    let hiddenWork = document.getElementById("work");
    hiddenWork.style.display = "none";
}

work.addEventListener("click", onWorkFunction);
workPage.addEventListener("mouseover", onWorkFunction);
workPage.addEventListener("mouseout", offWorkFunction);

const edu = document.getElementById("edu_btn");
const eduPage = document.getElementById("edu");

let onEduFunction = function () {
    let hiddenEdu = document.getElementById("edu");
    hiddenEdu.style.width = "100%";
    hiddenEdu.style.display = "block";
};

let offEduFunction = function () {
    let hiddenEdu = document.getElementById("edu");
    hiddenEdu.style.display = "none";
}

edu.addEventListener("click", onEduFunction);
eduPage.addEventListener("mouseover", onEduFunction);
eduPage.addEventListener("mouseout", offEduFunction);

const it = document.getElementById("it_btn");
const itPage = document.getElementById("it");

let onItFunction = function () {
    let hiddenIt = document.getElementById("it");
    hiddenIt.style.width = "100%";
    hiddenIt.style.display = "block";
};

let offItFunction = function () {
    let hiddenIt = document.getElementById("it");
    hiddenIt.style.display = "none";
}

it.addEventListener("click", onItFunction);
itPage.addEventListener("mouseover", onItFunction);
itPage.addEventListener("mouseout", offItFunction);

const soft = document.getElementById("soft_btn");
const softPage = document.getElementById("soft");

let onSoftFunction = function () {
    let hiddenSoft = document.getElementById("soft");
    hiddenSoft.style.width = "100%";
    hiddenSoft.style.display = "block";
};

let offSoftFunction = function () {
    let hiddenSoft = document.getElementById("soft");
    hiddenSoft.style.display = "none";
    
}

soft.addEventListener("click", onSoftFunction);
softPage.addEventListener("mouseover", onSoftFunction);
softPage.addEventListener("mouseout", offSoftFunction);