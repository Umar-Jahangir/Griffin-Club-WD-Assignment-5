document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
  
    // Pause and Resume on Hover
    slider.addEventListener("mouseover", () => {
      slider.style.animationPlayState = "paused";
    });
  
    slider.addEventListener("mouseout", () => {
      slider.style.animationPlayState = "running";
    });
  
    //glowing effect to hovere logo
    const logos = document.querySelectorAll(".slider img");
    logos.forEach((logo) => {
      logo.addEventListener("mouseover", () => {
        logo.style.boxShadow = "0 0 20px 10px #FFD700";
      });
      logo.addEventListener("mouseout", () => {
        logo.style.boxShadow = "none";
      });
    });
  });
  