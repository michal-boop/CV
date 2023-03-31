const work = document.getElementById("work_btn");
const workPage = document.getElementById("work");

let onWorkFunction = function () {
    let hiddenWork = document.getElementById("work");
    hiddenWork.style.width = "95%";
    hiddenWork.style.paddingRight = "11%";
};

let offWorkFunction = function () {
    let hiddenWork = document.getElementById("work");
    hiddenWork.style.width = "40%";
    hiddenWork.style.paddingRight = "7%";
}

work.addEventListener("click", onWorkFunction);
workPage.addEventListener("mouseover", onWorkFunction);
workPage.addEventListener("mouseout", offWorkFunction);

const edu = document.getElementById("edu_btn");
const eduPage = document.getElementById("edu");

let onEduFunction = function () {
    let hiddenEdu = document.getElementById("edu");
    hiddenEdu.style.width = "80%";
    hiddenEdu.style.paddingRight = "11%";
};

let offEduFunction = function () {
    let hiddenEdu = document.getElementById("edu");
    hiddenEdu.style.width = "40%";
    hiddenEdu.style.paddingRight = "7%";
}

edu.addEventListener("click", onEduFunction);
eduPage.addEventListener("mouseover", onEduFunction);
eduPage.addEventListener("mouseout", offEduFunction);

const it = document.getElementById("it_btn");
const itPage = document.getElementById("it");

let onItFunction = function () {
    let hiddenIt = document.getElementById("it");
    hiddenIt.style.width = "80%";
    hiddenIt.style.paddingRight = "11%";
};

let offItFunction = function () {
    let hiddenIt = document.getElementById("it");
    hiddenIt.style.width = "40%";
    hiddenIt.style.paddingRight = "7%";
}

it.addEventListener("click", onItFunction);
itPage.addEventListener("mouseover", onItFunction);
itPage.addEventListener("mouseout", offItFunction);

const soft = document.getElementById("soft_btn");
const softPage = document.getElementById("soft");

let onSoftFunction = function () {
    let hiddenSoft = document.getElementById("soft");
    hiddenSoft.style.width = "80%";
    hiddenSoft.style.paddingRight = "11%";
};

let offSoftFunction = function () {
    let hiddenSoft = document.getElementById("soft");
    hiddenSoft.style.width = "40%";
    hiddenSoft.style.paddingRight = "7%";
}

soft.addEventListener("click", onSoftFunction);
softPage.addEventListener("mouseover", onSoftFunction);
softPage.addEventListener("mouseout", offSoftFunction);