const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeModalBtn = modal.querySelector(".close");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
  console.log(closeModalBtn)
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    console.log(modal)
    modal.style.display = "none";
  }
});
