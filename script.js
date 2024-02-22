document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.querySelector(".nav-btn");
    const box = document.getElementById("sidebar");
  
    myButton.addEventListener("click", function() {
      box.classList.toggle('show');
    });
  });
