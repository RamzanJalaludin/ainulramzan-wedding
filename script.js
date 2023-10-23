
//javascript sections

  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

  // Observe the elements position at center
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  const fillElements = document.querySelectorAll('.fill');
  fillElements.forEach((el) => observer.observe(el));
  const dropElements = document.querySelectorAll('.drop');
  dropElements.forEach((el) => observer.observe(el));
  const riseElements = document.querySelectorAll('.rise');
  riseElements.forEach((el) => observer.observe(el));
  const slideElements = document.querySelectorAll('.slide');
  slideElements.forEach((el) => observer.observe(el));
  const swishElements = document.querySelectorAll('.swish');
  swishElements.forEach((el) => observer.observe(el));