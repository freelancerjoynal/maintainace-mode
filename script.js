// Create floating particles
const particlesContainer = document.getElementById('particles');
const particleCount = 20;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 20 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    particlesContainer.appendChild(particle);
}

// Countdown timer
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 3); // 3 days from now

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
}

// Update countdown every second
updateCountdown();
const x = setInterval(updateCountdown, 1000);

// Form submission (prevent default)
document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    
    if (emailInput.value) {
        alert('Thank you! We will notify you when the site is back online.');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});