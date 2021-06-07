const lbl = document.getElementById("lblemail");
const txt = document.getElementById("txtemail");
const lbl2 = document.getElementById("lblmsg");
const txt2 = document.getElementById("txtmsg");
const work = document.getElementById("btnwork");
txt.addEventListener("focusin", () => {
    lbl.style.top = "-22px";
});
txt.addEventListener("focusout", () => {
    if (txt.value.trim() == null || txt.value.trim() == "") {
        lbl.style.top = "0";
    }
});

txt2.addEventListener("focusin", () => {
    lbl2.style.top = "-23px";
});

txt2.addEventListener("focusout", () => {
    if (txt2.value.trim() == null || txt2.value.trim() == "") {
        lbl2.style.top = "0";
    }
});
work.addEventListener("click",()=>{
    alert("work will be available in few days");
});
