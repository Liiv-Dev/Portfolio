// Function creates shooting Stars on page 
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    document.body.appendChild(star); // Append stars directly to the body
  
    // Set initial random positions for each shooting star within the page's width and height
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    star.style.left = randomX + 'px';
    star.style.top = randomY + 'px';
  
    setTimeout(() => {
      star.remove(); // Remove the shooting star after animation ends
    }, 5000); // 5000ms (5s) is the duration of the shooting star animation
  }
  
  // Function to generate shooting stars every 3 seconds
  function generateShootingStars() {
    setInterval(() => {
      createShootingStar();
    }, 3000); // Generate a shooting star every 3 seconds (3000ms)
  }
  
  generateShootingStars(); // Start generating shooting stars
  
  