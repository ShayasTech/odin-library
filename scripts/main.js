console.log("Digital Library");
let addBtn = document.querySelector(".btn-add");
let form = document.querySelector("form");

addBtn.addEventListener("click", () => {
    if (form.style.visibility == 'visible') {
        addBtn.textContent = '➕ Add Books'
        form.style.visibility = 'collapse';
    }else{
        addBtn.textContent = "➖ Add Books";
        form.style.visibility = 'visible'
    }
});

