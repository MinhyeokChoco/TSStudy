const lkjperfect = JSON.parse(localStorage.getItem("lkjgreat"));
function draw2(index) {
    const span = document.createElement("span");
    const colorrandom = Math.floor(Math.random() * 5);
    span.classList.add(`_number0${colorrandom}`);
    span.classList.add("_number2");
    span.innerHTML = String(lkjperfect[index]);
    return span;
}
function lottoRandomInit2() {
    for (let i = 0; i < lkjperfect.length; i++) {
        document.querySelector(".number").append(draw2(i));
    }
}
lottoRandomInit2();
const j = document.querySelector(".bo");
function reDirect2(e) {
    location.href = "lotto.html";
}
j.onclick = (e) => { reDirect2(e); };
