var link = document.querySelector(".link-js");
var modal = document.querySelector(".modal");
var close = document.querySelector(".close");

link.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.add("show");
})

close.addEventListener("click", function() {
    modal.classList.remove("show");
})