const work = document.getElementById("work_btn");
const workPage = document.getElementById("work");

let onClickFunction = function () {
    let hiddenWork = document.getElementById("work");
    hiddenWork.style.width = "70%";
    hiddenWork.style.paddingRight = "11%";
};

let offClickFunction = function () {
    let hiddenWork = document.getElementById("work");
    hiddenWork.style.width = "0%";
    hiddenWork.style.paddingRight = "7%";
}

work.addEventListener("click", onClickFunction);
workPage.addEventListener("mouseover", onClickFunction);
workPage.addEventListener("mouseout", offClickFunction);